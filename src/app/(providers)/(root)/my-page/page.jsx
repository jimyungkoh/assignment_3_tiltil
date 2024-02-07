"use client";

import React, { useState, useEffect } from "react";
import Main from "../_components/Main";
import { useSelector, useDispatch } from "react-redux";

function MyPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newHobby, setNewHobby] = useState("");
  const [editMode, setEditMode] = useState({
    username: false,
    bio: false,
    hobbies: false,
  });
  const [localUser, setLocalUser] = useState({
    username: "",
    bio: "",
    hobbies: [],
  });

  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  const handleEdit = (field) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleSave = (field) => {
    switch (field) {
      case "username":
        dispatch(setUsername(localUser.username));
        break;
      case "bio":
        dispatch(setBio(localUser.bio));
        break;
      case "hobbies":
        dispatch(setHobbies(localUser.hobbies));
        break;
      default:
        break;
    }
    setEditMode({ ...editMode, [field]: false });
    // 저장 후 input과 textarea 비활성화
    setLocalUser({ ...localUser, [field]: localUser[field] });
  };

  const handleChange = (e, field) => {
    setLocalUser({ ...localUser, [field]: e.target.value });
  };

  const handleNewHobbyChange = (e) => {
    setNewHobby(e.target.value);
  };

  const handleAddHobby = () => {
    if (newHobby.trim() !== "") {
      const updatedHobbies = [...localUser.hobbies, newHobby];
      setLocalUser({ ...localUser, hobbies: updatedHobbies });
      setNewHobby("");
    }
  };

  const handleRemoveHobby = (hobby) => {
    const updatedHobbies = localUser.hobbies.filter((h) => h !== hobby);
    setLocalUser({ ...localUser, hobbies: updatedHobbies });
  };

  return (
    <Main>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-4">My Page</h1>
        <div className="mb-4 flex justify-between items-center">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            이름
          </label>
          {editMode.username ? (
            <button onClick={() => handleSave("username")}>Save</button>
          ) : (
            <button onClick={() => handleEdit("username")}>Edit</button>
          )}
        </div>
        <div className="flex-1">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={localUser.username}
            onChange={(e) => handleChange(e, "username")}
            disabled={!editMode.username}
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            한 줄 소개
          </label>
          {editMode.bio ? (
            <button onClick={() => handleSave("bio")}>Save</button>
          ) : (
            <button onClick={() => handleEdit("bio")}>Edit</button>
          )}
        </div>
        <div className="flex-1">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={localUser.bio}
            onChange={(e) => handleChange(e, "bio")}
            disabled={!editMode.bio}
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            취미
          </label>
          {editMode.hobbies ? (
            <button onClick={() => handleSave("hobbies")}>Save</button>
          ) : (
            <button onClick={() => handleEdit("hobbies")}>Edit</button>
          )}
        </div>
        <div>
          <ul className="list-disc pl-5">
            {localUser.hobbies.map((hobby, index) => (
              <li key={index} className="mb-2">
                {hobby}{" "}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleRemoveHobby(hobby)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            type="text"
            value={newHobby}
            onChange={handleNewHobbyChange}
            placeholder="Add a new hobby"
            disabled={!editMode.hobbies}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleAddHobby}
            disabled={!editMode.hobbies}
          >
            Add Hobby
          </button>
        </div>
      </div>
    </Main>
  );
}

export default MyPage;

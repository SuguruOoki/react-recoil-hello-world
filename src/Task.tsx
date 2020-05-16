import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { taskState } from "atoms/Task";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const setTasks = useSetRecoilState(taskState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onClick = () => {
    setTasks((t) => {
      return [...t, { title, completed: false }];
    });
    setTitle("");
  };
  return (
    <div>
      <label>
        タスク名
        <input type="text" value={title} onChange={onChange} />
      </label>
      <button onClick={onClick}>登録</button>
    </div>
  );
};

export const TaskList = () => {
  const tasks = useRecoilValue(taskState);
  return (
    <>
      <TaskInput />
    </>
  );
};

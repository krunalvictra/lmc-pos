"use client";
import {
  decrement,
  increment,
  reset,
} from "@Redux/features/employeeDetailsSlice";
import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import styles from "@styles/Home.module.scss";

export default function Home() {
  const count = useAppSelector((state) => state.employeeDetailsReducer.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <main className={`container ${styles.main}`}>
        <h1 className="text-center">Welcome to Next.js!</h1>
        <p className="text-center">
          Get started by editing{" "}
          <code className="bg-dark text-white p-2">pages/index.js</code>
        </p>
        <button className="btn btn-primary">Krunal</button>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <div className="d-flex" style={{ marginBottom: 16 }}>
          <button onClick={() => dispatch(increment())}>increment</button>
          <button
            onClick={() => dispatch(decrement())}
            style={{ marginInline: 16 }}
          >
            decrement
          </button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
      </main>
    </>
  );
}

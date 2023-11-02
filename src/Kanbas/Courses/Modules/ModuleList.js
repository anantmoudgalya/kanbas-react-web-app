import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ModuleButtons from "./ModuleButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const filteredModules = modules.filter(
    (module) => module.course === courseId
  );
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div>
      <ModuleButtons />
      <br />
      <br />
      <li className="list-group-item">
        <button
          className="btn btn-success mb-2 me-2"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          className="btn btn-primary mb-2 me-2"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
        <input
          className="form-control mb-2"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control mb-2"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>
      <ul className="list-group">
        <li class="list-group-item list-group-item-secondary kanbas-module-header-padding">
          <div>
            <b>Week 1 Modules</b>
            <i class="fa fa-ellipsis-vertical float-end mt-1"></i>
            <i class="fa fa-plus float-end mt-1 me-3"></i>
            <i class="fa fa-circle-check float-end mt-1 me-3 kanbas-green ps-5"></i>
          </div>
        </li>

        {filteredModules.map((module, index) => (
          <li key={index} className="list-group-item kanbas-module-padding">
            <div>
              <i class="fa fa-ellipsis-vertical float-end mt-1"></i>
              <i class="fa fa-circle-check float-end mt-1 me-3 kanbas-green ps-5"></i>
              <b>{module.name}</b>
              <br />
              {module.description}
              <br />

              <button
                className="btn btn-warning float-start me-2 mt-2"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>

              <button
                className="btn btn-danger float-start mt-2"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;

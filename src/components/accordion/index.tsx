import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState<string | null | boolean>(null);
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  const handleSingleSelection = (getCurrentId: string) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  // const handleMultiSelection = (getCurrentId: string) => {
  //   const cpyMultiple = [...multiple];
  //   const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

  //   if (findIndexOfCurrentId === -1) {
  //     cpyMultiple.push(getCurrentId);
  //   } else {
  //     cpyMultiple.splice(findIndexOfCurrentId, 1);
  //   }

  //   setMultiple(cpyMultiple);
  // };

  const handleMultiSelection = (getCurrentId: string) => {
    const findIndexOfCurrentId = multiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      setMultiple([...multiple, getCurrentId]);
    } else {
      setMultiple([
        ...multiple.slice(0, findIndexOfCurrentId),
        ...multiple.slice(findIndexOfCurrentId + 1),
      ]);
    }
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data?.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>
                  {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1
                    ? "-"
                    : "+"}
                </span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
};
export default Accordion;

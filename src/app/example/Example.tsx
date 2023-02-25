import React from 'react';
import { useExample } from '~/app/shared/example';
import './example.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FiCheck } from 'react-icons/fi';
import OutsideAlerter from './clickoutside';

export default function Example() {
  const [state, list, openDropdown, selected, setSelected] = useExample();

  function onClickText() {
    openDropdown(!state);
  }
  function onClickOutside() {
    openDropdown(false);
  }
  function selectItem(i: number) {
    setSelected(String(i));
    openDropdown(false);
  }

  return (
    <div className="example">
      <OutsideAlerter action={() => onClickOutside()}>
        <>
          <button className="dropdown" onClick={onClickText}>
            <div className="text">{list[parseInt(selected)]}</div>
            <div>
              {!state ? (
                <IoIosArrowDown style={{ color: 'rgb(127,131,133)', fontSize: '15px' }} />
              ) : (
                <IoIosArrowUp style={{ color: 'rgb(127,131,133)', fontSize: '15px' }} />
              )}
            </div>
          </button>

          {state && (
            <div className="content-container">
              <div className="content">
                {list.map((r, i) => (
                  <div
                    className={selected === String(i) ? 'item-selected item' : 'item'}
                    key={r}
                    onClick={() => selectItem(i)}
                  >
                    <div>{r}</div>
                    {selected === String(i) && <FiCheck style={{ color: 'rgb(98,114,222)', fontSize: '20px' }} />}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      </OutsideAlerter>
    </div>
  );
}

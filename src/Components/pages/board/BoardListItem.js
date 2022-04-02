import React, { useRef, useContext } from 'react';
import ListItemLabels from './ListItemLabels';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const BoardListItem = ({ item, isFromSearch }) => {
  const listItem = useRef(null);

  const { currentBoardId, setCurrentCard, setModal, setFastEditModalPos, toggleBigLabels, bigLabels, setData, data, foundCardId } = useContext(UserContext);
  const { getList, moveCard } = useContext(BoardContext);

  const onClick = (e) => {
    if(!isFromSearch) {
      if(!e.target.classList.contains('func-e-btn') && !e.target.parentElement.classList.contains('func-e-btn') && !e.target.classList.contains('func-card-label') && !e.target.classList.contains('func-label-text')) {
        setModal('on', 'detailsModal');
      }
      setCurrentCard(item);
    }
  }

  const onDragStart = (e) => {
    if(!isFromSearch) {
      const thisE = e.target;
      setTimeout(() => {
        thisE.classList.add('dragging')
      }, 0);
    }
  }

  const onDragOver = e => {
    e.preventDefault();
  }

  const onDragEnd = (e) => {
    if(!isFromSearch) {
      e.target.classList.remove('dragging')

      if(data) {
        const destCardIndex = getList(currentBoardId, data.destListId).items.findIndex(i => i.id === data.destItemId)

        moveCard(currentBoardId, item.listId, item.id, currentBoardId, data.destListId, destCardIndex, item);

        setData(null)
      }
    }
  }

  const onDrop = e=> {
    if(!isFromSearch) {
      let elem;
      if(e.target.classList.contains('func-item')) {
        elem = e.target
      }
      if(e.target.parentElement.classList.contains('func-item')) {
        elem = e.target.parentElement
      }
      if(e.target.parentElement.parentElement.classList.contains('func-item')) {
        elem = e.target.parentElement.parentElement
      }
      if(e.target.parentElement.parentElement.parentElement.classList.contains('func-item')) {
        elem = e.target.parentElement.parentElement.parentElement
      }

      const destListId = elem.firstElementChild.innerText;

      setData({
        destItemId: item.id,
        destListId,
        correctDrop: true
      });
    }
  }

  const onEBtnClick = (e) => {
    setFastEditModalPos({
        top: listItem.current.getBoundingClientRect().top,
        left: listItem.current.getBoundingClientRect().left,
        width: listItem.current.getBoundingClientRect().width
      });
    setModal('on', 'fastEditModal');
  }

  const onToggleBigLabels = () => {
    if(!isFromSearch) {
      toggleBigLabels();
    }
  }

  

  return (
    <div
      className={`func-item trello-board-list-item ${item.id === foundCardId && !isFromSearch && 'found'}`}
      draggable={`${!isFromSearch && 'true'}`}
      ref={listItem}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
      onClick={onClick}>
        <div className='d-n'>{item.listId}</div>
        <div className='drag-cover'></div>
        <ListItemLabels father='boardListItem' labels={item.labels} bigLabels={bigLabels} toggleBigLabels={onToggleBigLabels} />
        <div>
          { item.text }
        </div>
      
        <div className={`func-e-btn trello-board-list-item-edit-btn ${isFromSearch && 'd-n'}`} onClick={onEBtnClick}>
          <i className='fas fa-pen'></i>
        </div>
    </div>
  )
}

export default BoardListItem
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

const Categories = () => {
  const updateStatus = () => useDispatch(statusCheck());
  const status = useSelector((state) => state.categories);
  return (
    <div>
      {status.map((status) => <p key={status}>{status}</p>)}
      <button type="button" onClick={updateStatus}>Check Status</button>
    </div>
  );
};

export default Categories;

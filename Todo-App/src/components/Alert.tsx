import React, { useEffect } from 'react'
import ListItem from './ListItem';

interface AlertProps {
  show: boolean
  msg: string
  type: string
  list?: ListItem[]
  removeAlert: () => void
}

const Alert: React.FC<AlertProps> = ({ list, show, msg, type, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => removeAlert(), 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div className={`alert alert-${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert
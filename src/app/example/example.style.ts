import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  example: {
    textAlign: 'center',
    padding: 50,
    display: 'flex',
    flexDirection: 'row'
  },
  dropdown: {
    border: '2px solid rgb(205,216,254)',
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    background: '#fff',
    '& .text': {
      color: 'rgb(127,131,133)'
    }
  },
  contentContainer: {
    marginTop: '3px',
    width: '300px',
    padding: '10px 2px 10px 10px',
    border: '1px solid rgba(231,231,231)',
    borderRadius: '15px',
    color: 'rgb(127,131,133)',
    height: '250px',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '3px'
  },
  '@global': {
    '::-webkit-scrollbar': {
      width: '4px',
      right: '-10px'
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(184,188,193, 0.7)',
      borderRadius: '10px'
    }
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginBottom: '10px',
    paddingTop: '8px',
    paddingBottom: '8px',
    cursor: 'pointer'
  },
  itemSelected: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginBottom: '10px',
    paddingTop: '8px',
    paddingBottom: '8px',
    cursor: 'pointer',
    backgroundColor: 'rgb(238,241,255)',
    borderRadius: '5px',
    color: 'rgb(98,114,222)'
  }
});

export default useStyles;

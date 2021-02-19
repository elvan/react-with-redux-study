import React, { useState, useEffect } from 'react';
import axios from 'axios';
import translateConfig from '../config/translateConfig';

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      'https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: text,
          target: language.value,
          source: 'en',
          key: translateConfig,
        },
      }
    );
  }, [language, text]);

  return <div>Convert</div>;
};

export default Convert;

import React, { useState } from 'react';
import '../RegisterLayout.css';

import {
  Grid,
  InputLabel,
  FormControl,
  MenuItem,
  ListItemText,
  Select,
} from '@material-ui/core';

const selectChoice = [];

export default function App() {
  const [otherCareerChoice, setOtherCareerChoice] = useState(false);
  const [otherCareerText, setOtherCareerText] = useState('');

  const [values, setValues] = useState({
    selectChoice: [''],
  });

  const handleCareerChoice = (event) => {
    setValues({ ...values, selectChoice: event.target.value });
  };

  const handleChange = (input) => (event) => {
    if (event.target.value !== ' ') {
      const value =
        input === 'resume' ? event.target.files[0] : event.target.value;
      setValues({ ...values, error: false, [input]: value });
    }
  };
  // console.log(values.selectChoice);

  return (
    <Grid container style={{ marginBottom: '10px' }}>
      <Grid item xs={11} sm={5} lg={11} sx={{ m: 1 }}>
        <FormControl fullWidth sx={{ mt: 1 }}>
          <InputLabel id="demo-mutiple-checkbox-label">
            Yo'nalish tanlang
          </InputLabel>
          <Select
            label="Yo'nalish tanlang"
            id="demo-mutiple-checkbox"
            multiple
            value={values.selectChoice}
            onChange={handleChange('careerChoice')}
            renderValue={(selected) => selected.join(', ')}
          >
            {selectChoice.map(
              // mapped array
              (name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                </MenuItem>
              )
            )}
            <MenuItem
              onClick={() => setOtherCareerChoice(!otherCareerChoice22)}
            >
              <ListItemText primary={'Robototexnika (musobaqa)'} />
            </MenuItem>
            <MenuItem onClick={() => setOtherCareerChoice(!otherCareerChoice)}>
              <ListItemText primary={'Contest'} />
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {otherCareerChoice && ( // added input and text section
        <Grid item xs={11} sm={5} lg={11} sx={{ m: 1 }}>
          <FormControl variant="outlined" fullWidth sx={{ mt: 1 }}>
            {/* <input
              value={otherCareerText}
              onChange={(event) => setOtherCareerText(event.target.value)}
              className="contestInput"
            /> */}

            <p>
              - Ishtirokchi tomonidan yasalgan smart-car bilan 24-avgust kuni
              Muhammad al-Xorazmiy nomli ixtisoslashtirilgan maktabga
              kelishingiz talab etiladi; - 24-avgust kuni soat 13:00 da
              tayyorgarlik ko'rish uchun start beriladi - 24-avgust kuni soat
              16:30 da musobaqa boshlanadi.
            </p>
          </FormControl>
        </Grid>
      )}
    </Grid>
  );
}

import * as React from 'react';
import { makeStyles, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const content = [
  {
    label: 'Innovate',
    description: 'Inspire change through disruptive ideas.'
  },

  {
    label: 'Craft',
    description: 'Meticulously crafting experiences that captivate, inspire, and leave a lasting impression.'
  },
  {
    label: 'Excel',
    description: 'Strive for excellence and setting new benchmarks of success.'
  },


];

const  SliderGrid =()=> {

  return (
    <Box display={{lg:'flex',xs: 'block'}} justifyContent={'center'}>
        {content.map((step, index) => (
          <div key={step.label}>
        
              <Box
              // bgcolor={'#00051a'}
              
              // borderRadius={'50%'}
              width={'250px'}
              height={'250px'}
              display={{lg:'flex',xs:'block'}}
              alignItems={'center'}
              justifyContent={'center'}
              color={'#00051a'}
              textAlign={'center'}
              mx={4}
              padding={3}
              position={'relative'}
                
              >
                <Box position={'absolute'} sx={{
                  left:'0',
                  top:'50px',
                  zIndex:"0",
                  width:'100%',
                  height:'100%'
                }}>
                <img width={'300px'} src="/gridImage/abstractBg.svg"/>
                </Box>
                <Box position={'relative'}>
                  <Box fontSize={'60px'}
                  fontWeight={'700'}
                  color={'#00051a'}
                  >
                  {step?.label}
                    </Box>
                    
                    <p>{step?.description}</p>
                </Box>
              </Box>
            
          </div>
        ))}
      {/* </AutoPlaySwipeableViews> */}
    </Box>
  );
}

export default SliderGrid;

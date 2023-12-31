import { useState } from 'react';
import Select from 'react-select';
import { stateFunc } from '../redux/stateSlice';
import { useDispatch } from 'react-redux';

const SelectState = () => {

    const [selectedState, setSelectedState] = useState();
    const dispatch = useDispatch()
    const states = [  //=> the list of states
        { value: 4, label: 'Alabama'},
        { value: 0, label: 'Alaska'},
        { value: 5.60, label: 'Arizona'},
        { value: 6.50, label: 'Arkansas'},
        { value: 7.25, label: 'California'},
        { value: 2.90, label: 'Colorado'},
        { value: 6.35, label: 'Connecticut'},
        { value: 0, label: 'Delaware'},
        { value: 6, label: 'Florida'},
        { value: 4, label: 'Georgia'},
        { value: 4, label: 'Hawai'},
        { value: 6, label: 'Idaho'},
        { value: 6.25, label: 'Illionis'},
        { value: 7, label: 'Indiana'},
        { value: 6, label: 'Iowa'},
        { value: 6.50, label: 'Kansas'},
        { value: 6, label: 'Kentucky'},
        { value: 4.45, label: 'Louisiana'},
        { value: 5.50, label: 'Maine'},
        { value: 6, label: 'Maryland'},
        { value: 6.25, label: 'Massachusetts'},
        { value: 6, label: 'Michigan'},
        { value: 6.88, label: 'Minnesota'},
        { value: 7, label: 'Mississippi'},
        { value: 4.23, label: 'Missouri'},
        { value: 0, label: 'Montana'},
        { value: 5.50, label: 'Nebraska'},
        { value: 6.85, label: 'Nevada'},
        { value: 0, label: 'New Hampshire'},
        { value: 6.63, label: 'New Jersey'},
        { value: 4.88, label: 'New Mexico'},
        { value: 4, label: 'New York'},
        { value: 4.75, label: 'North Carolina'},
        { value: 5, label: 'North Dakota'},
        { value: 5.75, label: 'Ohio'},
        { value: 4.50, label: 'Oklahoma'},
        { value: 0, label: 'Oregon'},
        { value: 6, label: 'Pennsylvania'},
        { value: 7, label: 'Rhode Island'},
        { value: 6, label: 'South Carolina'},
        { value: 4.20, label: 'South Dakota'},
        { value: 7, label: 'Tennessee'},
        { value: 6.25, label: 'Texas'},
        { value: 6.10, label: 'Utah'},
        { value: 6, label: 'Vermont'},
        { value: 5.30, label: 'Virginia'},
        { value: 6.50, label: 'Washington'},
        { value: 6, label: 'West Virginia'},
        { value: 5, label: 'Wisconsin'},
        { value: 4, label: 'Wyoming'},
        { value: 6, label: 'D.C'},
        //=> diğer stateleri ekleyin
      ];

      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px solid #ccc',
          color: state.isSelected ? 'white' : 'black',
          background: state.isSelected ? '#94a3b8' : state.isFocused ? '#16330014' : 'white',
          padding: 10,
        }),
        control: (provided) => ({
          ...provided,
          width: '100%',
          height: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '10px',
        }),
      };

      return (

            <div className='flex flex-col'>
                
                <label htmlFor='states' className='font-semibold'>What state did you make your purchase in?<p className="text-gray-500">(required)</p></label>
                    <div className='mt-[10px]'></div>
                        <Select   
                          className='border-gray-400 rounded-sm'
                          options={states}
                          styles={customStyles}
                          value={selectedState}
                          onChange={(selectedOption) => {
                          setSelectedState(selectedOption);
                          dispatch(stateFunc(selectedOption.value));
                          }}
                          placeholder="Select state..."
                          isSearchable     
                        />  
             
                
            </div>
  
      
        
      );
}

export default SelectState



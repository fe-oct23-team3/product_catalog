import { FC } from 'react';
import Select, {
  GroupBase,
  OptionProps,
  StylesConfig,
} from 'react-select';
import styles from './PaginationButton.module.scss';

interface Props {
  handleSelectChange: (value:string,
    limit:string) => void;
  limit:string
}

export const PaginationButton: FC<Props> = (props) => {
  const { handleSelectChange, limit } = props;
  const paginationOptions = ['All', '4', '8', '16'];

  interface Option {
    value:string,
    label:string,
  }

  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      console.log(typeof selectedOption.value)
      handleSelectChange(selectedOption.value, 'limit');
    }
};

  const options: Option[] = [
    { value: '4', label: '4' },
    { value: '8', label: '8' },
    { value: '16', label: '16' },
    { value: 'All', label: 'All' },
  ];

  const getBackgroundColor = (state: OptionProps<Option, boolean>) => {
    if (state.isFocused && !state.isSelected) {
      return '#FAFBFC';
    }

    if (state.isSelected) {
      return '#313237';
    }

    return '#FFFFFF';
  };

  const getColor = (state:OptionProps<Option, boolean>) => {
    if (state.isSelected) {
      return '#ffffff';
    }

    if (state.isFocused) {
      return '#313237';
    }

    return '#89939A';
  };

  const customStyles:StylesConfig<Option, false, GroupBase<Option>> = {
    control: (base, state) => ({
      ...base,
      border: '1px solid #B4BDC3',
      font: 'Mont',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '21px',
      borderRadius: 0,
      borderColor: state.isFocused ? '#313237' : '#B4BDC3',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#89939A',
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
    }),
    indicatorSeparator: (base) => ({
      ...base,
      height: 0,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: getBackgroundColor(state),
      color: getColor(state),
      font: 'Mont',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '21px',
      ':active': {
        background: 'none',
      },
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: 'transform 0.5 ease',
      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0)',
    }),
  };

  return (
    <div>
      <Select<Option, false>
        options={options}
        styles={customStyles}
        onChange={handleChange}
        defaultValue={options[options.length - 1]}
      />
      <select
        className={styles.limit}
        value={limit}
        name=""
        id=""
        // onChange={(event) => handleSelectChange(event, 'limit')}
      >
        <option value="all" selected>All</option>
        {paginationOptions.map(value => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

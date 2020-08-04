import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

// const Search = () => {
//   const [state, setState] = React.useState({
//     text: '',
//   });

//   const handleChange = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       <form className='form'>
//         <input
//           type='text'
//           name='text'
//           placeholder='Search Users...'
//           value={state.text}
//           onChange={handleChange}
//         />
//         <input
//           type='submit'
//           value='Search'
//           className='btn btn-dark btn-block'
//         />
//       </form>
//     </div>
//   );
// };

export default Search;

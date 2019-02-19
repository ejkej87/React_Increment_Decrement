var Counter = React.createClass({
   getInitialState: function () {
      return {
         counter: 0
      };
   },

   decrement: function () {
      this.setState({
         counter: this.state.counter - 1
      });
   },

   increment: function () {
      this.setState({
         counter: this.state.counter + 1
      });
   },
  
//   //component life cycle methods:
//   
      componentDidMount: function () {
            console.log('componentDidMount');
         },

         componentDidUpdate: function () {
            console.log('componentDidUpdate');
         },

         componentWillUnmount: function () {
            console.log('componentWillUnmount');
         },

         shouldComponentUpdate: function () {
            return true;
            console.log('shouldComponentUpdate');
         },


         getDerivedStateFromProps: function() {
            console.log('static getDerivedStateFromProps');
         },

         getSnapshotBeforeUpdate: function () {
            console.log('getSnapshotBeforeUpdates');
            return true;
         },

         getDerivedStateFromError: function () {
            console.log('static getDerivedStateFromError');
         },
         componentDidCatch: function () {
            console.log('componentDidCatch');
         },

         UNSAFE_componentWillMount: function () {
            console.log('UNSAFE_componentWillMount');
         },

         UNSAFE_componentWillReceiveProps: function () {
            console.log('UNSAFE_componentWillReceiveProps');
         },

         UNSAFE_componentWillUpdate: function () {
            console.log('UNSAFE_componentWillUpdate');
         },
   
      
   
      
   
   render: function() {
      return React.createElement('span', {}, 'Licznik ' + this.state.counter, 
                                 React.createElement('button', {onClick: this.increment}, 'Add 1'), 
                                 React.createElement('button', {onClick: this.decrement}, 'Minus 1'), 
      )
   }
});



var app = React.createElement('div', {}, 
                             React.createElement(Counter),
                             React.createElement(Counter)
                             );
ReactDOM.render(app, document.getElementById('app'));





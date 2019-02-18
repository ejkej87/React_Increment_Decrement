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
  
   render: function() {
      return React.createElement('span', {}, 'Licznik ' + this.state.counter, 
                                 React.createElement('button', {onClick: this.increment}, 'Add 1'), 
                                 React.createElement('button', {onClick: this.decrement}, 'Minus 1'), 
   )}

});

var Counter2 = React.createClass({
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

   render: function() {
      return React.createElement('span', {}, 'Licznik ' + this.state.counter, 
                                 React.createElement('button', {onClick: this.increment}, 'Add 1'), 
                                 React.createElement('button', {onClick: this.decrement}, 'Minus 1'), 
                                )}

});

var app = React.createElement(Counter);
ReactDOM.render(app, document.getElementById('app'));

var app = React.createElement(Counter2);
ReactDOM.render(app, document.getElementById('app2'));

//component life cycle methods:

//render()
//constructor()
//componentDidMount()
//componentDidUpdate()
//componentWillUnmount()
//shouldComponentUpdate()
//static getDerivedStateFromProps()
//getSnapshotBeforeUpdate()



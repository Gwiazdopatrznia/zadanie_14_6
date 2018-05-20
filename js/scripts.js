var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('Ustawia domyślne wartości tych propsów, które nie zostały przekazane do komponentu');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
         console.log('Licznik startuje od: ' + this.state.counter);
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'counter'},
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+')
        );
    }, 
    
    componentDidMount: function() {
       console.log('Pobiera dane, aby jak najszybciej pokazać komponenty użytkownikowi');
    },

    componentWillReceiveProps: function() {
        console.log('Pozwala aktualizować stan na podstawie nadchodzących właściwości');
    },

    shouldComponentUpdate: function() {
        console.log('Sprawdza czy trzeba jeszcze raz przerysować komponent. Czeka na true lub false');
        return true;
    },
 
    componentWillUpdate: function() {
        console.log('Gotowość na nadchodzące zmiany');
    },
  
    componentDidUpdate: function(prevProps, prevState) {  
        console.log('Licznik zaktualizowany z ' + prevState.counter + ' na ' + this.state.counter)
    },
  
    componentWillUnmount: function() {
        console.log('Komponent usuwany z drzewa DOM');
    },

});

var Counters = React.createClass({
  render: function() {
    return React.createElement('div', {className: 'counters'},
      React.createElement(Counter, {}),
      React.createElement(Counter, {}),
    )
  }
});

var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));

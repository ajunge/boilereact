//App.jsx

var App  = React.createClass({displayName: 'App',
  componentDidMount: function() {
  },


  render: function() {
    return (
      <body>
        <NavigationBar
        	account={this.state.account}
        	openChangeAccountModal={this.openChangeAccountModal}/>
        <div className="container-fluid">
          <ReactBootstrap.Row>
            <ReactBootstrap.Col md={12}>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </div>
        <ChangeAccountModal
        	ref={'changeAccountModal'}
        	accounts={this.state.accounts}
        	account={this.state.account}
        	useNewAccount={this.useNewAccount}/>
      </body>
    );
  }
});

window.onload = function() {
  
  React.render(
    <App/>,
    document.getElementById('body')
  );
};

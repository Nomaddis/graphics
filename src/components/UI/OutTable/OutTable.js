import React from "react";

class OutTable extends React.Component {
  constructor(props) { super(props); };
  render() { return (

    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
        <tr>{this.props.cols.map((c) => <th key={c.key}>{c.name}</th>)}</tr>
        </thead>
        <tbody>
        {this.props.data.map((r,i) => <tr key={i}>
          {this.props.cols.map(c => <td key={c.key}>{ r[c.key] }</td>)}
        </tr>)}
        </tbody>
      </table>
      {console.log('data :', this.props.data, ' and cols: ', this.props.cols)}
    </div>
  ); };
}

export default OutTable;
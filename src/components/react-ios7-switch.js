import './style.scss';
import classNames from 'classnames';
import noop from 'noop';

export default class extends React.Component{
  static propTypes={
    theme:React.PropTypes.string,
    disabled:React.PropTypes.bool,
    size:React.PropTypes.string,
    cssClass:React.PropTypes.string,
    checked:React.PropTypes.bool,
    onChange:React.PropTypes.func
  };
  static defaultProps={
    theme:'green',
    disabled:null,
    size:'30px',
    cssClass:'',
    checked:false,
    onChange:noop
  };

  constructor(props){
    super(props);
    this.state=props;
  }

  componentWillReceiveProps(nextProps,nextState){
    this.setState(nextProps);
  }

  _onClick(inEvent){
    inEvent.preventDefault();
    this.setState({
      checked:!this.state.checked
    },()=>{
      this.props.onChange(this.state,inEvent);
    });
  }

  _onChange(inEvent){
  }

  render(){
    const {cssClass,size,theme,disabled} = this.props;
    return (
      <label
        onClick={this._onClick.bind(this)}
        data-theme={theme}
        data-disabled={disabled}
        style={{
          fontSize:size
        }}
        className={classNames('react-ios7-switch',cssClass)}>
        <input type="checkbox" onChange={this._onChange.bind(this)} checked={this.state.checked} disabled={disabled} />
        <span></span>
      </label>
    );
  }
}

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/shared';

interface IProps {}

interface IState {}

class ExternalComponent extends PureComponent<IProps, IState> {
  public render() {
    return <div className="ExternalComponent">External Component</div>;
  }
}

// export default ExternalComponent;
export default connect()(ExternalComponent);

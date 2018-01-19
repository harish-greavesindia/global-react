import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import {Route} from 'react-router';

import { history } from '../../common/vendor/history';

import IndexComponent  from './components/index.component';

export const Routing: React.SFC<any> = () => {

    return <ConnectedRouter history={history}>
        <Route exact component={IndexComponent} path = "/" />
    </ConnectedRouter>
};

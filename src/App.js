import React, { Fragment } from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const GET_ENCLOSURE_INFO = gql`
  query getEnclosureInfo {
    monkeyEnclosure @client {
      hasMoat
      numberOfMonkeys
      numberOfTrees
    }
  }
`;

function App() {
  const {data} = useQuery(GET_ENCLOSURE_INFO);
  const enclosureInfo = data.monkeyEnclosure;
  return (
    <Fragment>
      <h1>Information About Monkey Enclosure</h1>
      <ul>
        <li>
          Does this enclosure have a moat? {enclosureInfo.hasMoat ? 'yes' : 'no'}
        </li>
        <li>
          The number of monkeys in this enclosure: {enclosureInfo.numberOfMonkeys}
        </li>
        {enclosureInfo.numberOfTrees && (
          <li>
            The number of trees in this enclosure: {enclosureInfo.numberOfTrees}
          </li>
        )}
      </ul>
    </Fragment>
  );
}

export default App;

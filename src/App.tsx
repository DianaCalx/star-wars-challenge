import Header from 'components/Header';
import List from 'components/List';
import Main from 'components/Main';

import useGetPeople from 'hooks/useGetPeople';
import useGetPerson from 'hooks/useGetPerson';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PersonType } from 'types';

import styles from './App.module.css';

function App() {
  const history = useHistory();
  const { people, loading, error } = useGetPeople();
  const [personSelected, setPersonSelected] = useState<PersonType>();
  useGetPerson({ personSelected, setPersonSelected });

  const onHeaderClick = () => {
    history.push('');
    setPersonSelected(undefined);
  }

  const onClickListItem = (person: PersonType) => {
    setPersonSelected(person);
    history.push(person.id)
  }

  return (
    <div className={styles.layout}>
      <Header onClick={onHeaderClick} />
      <div className={styles.content}>
        <List
          people={people}
          loading={loading}
          error={error}
          onClick={onClickListItem}
        />
        <Main person={personSelected} />
      </div>
    </div>
  );
}

export default App;

import { ReactComponent as RightIcon } from 'assets/icons/right-icon.svg';
import { ReactComponent as SpinnerIcon } from 'assets/icons/spinner.svg';
import { PersonType } from 'types';
import styles from './List.module.css';

type Props = {
  people: PersonType[];
  loading: boolean;
  error: boolean;
  onClick: (person: PersonType) => void;
};

function List({ people, loading, error, onClick }: Props) {
  return (
    <aside className={styles.aside}>
       <ul className={styles.list}>
        {people.map(person => (
          <li key={person.id} className={styles.item} role="button" onClick={() => onClick(person)}>
            <div>
              <h2>{person.name}</h2>
              <p>{`${
                person.species?.name ? person.species.name : 'Human'
              } from ${person.homeworld.name}`}</p>
            </div>
            <RightIcon />
          </li>
        ))}
      </ul>
      {loading &&
        <div className={styles.spinner}>
          <SpinnerIcon />
          <span>Loading</span>
        </div>
      }
      {error && <p className={styles.error__message}>Failed to Load Data</p>}
    </aside>
  );
}

export default List;

import { PersonType } from 'types';
import styles from './Main.module.css';

type Props = {
  person?: PersonType;
};

function Main({ person }: Props) {
  if (!person) {
    return <></>;
  }

  const {
    eyeColor,
    hairColor,
    skinColor,
    birthYear,
    vehicleConnection
  } = person;
  return (
    <main className={styles.main}>
      <div className={styles.table__wrapper}>
        <h2 className={styles.table__title}>General Information</h2>
        <div className={styles.table__row}>
          <p>Eye Color</p>
          <p>{eyeColor}</p>
        </div>
        <div className={styles.table__row}>
          <p>Hair Color</p>
          <p>{hairColor}</p>
        </div>
        <div className={styles.table__row}>
          <p>Skin Color</p>
          <p>{skinColor}</p>
        </div>
        <div className={styles.table__row}>
          <p>Birth Year</p>
          <p>{birthYear}</p>
        </div>
      </div>
      {!!vehicleConnection.vehicles.length && (
        <div className={styles.table__wrapper}>
          <h2 className={styles.table__title}>Vehicles</h2>
          {vehicleConnection.vehicles.map(vehicle => (
            <div key={vehicle.id} className={styles.table__row}>
              <p>{vehicle.name}</p>
            </div>
          ))}
        </div>
      )}
  </main>
  );
}

export default Main;

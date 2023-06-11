import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';
import { person } from 'graphql/queries';
import { PersonQueryType, PersonType } from 'types';

type Params = {
  id: string;
}

type Props = {
  personSelected: PersonType | undefined;
  setPersonSelected: (person: PersonType) => void;
}

function useGetPerson({ personSelected, setPersonSelected }: Props) {
  const history = useHistory();
  const { id } = useParams<Params>();
  const [getPerson, { data, error }] = useLazyQuery<PersonQueryType>(person);

  useEffect(() => {
    if (!personSelected && id) {
      getPerson({
        variables: {
          id
        },
      });
    }
  }, [getPerson, id, personSelected]);

  if (!personSelected && error) {
    history.push('/');
  }

  if (!personSelected && data && id) {
    setPersonSelected(data.person);
  }
}

export default useGetPerson;

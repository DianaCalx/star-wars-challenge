import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { allPeople } from 'graphql/queries';
import { AllPeopleQueryType, PageInfoType, PersonType } from 'types';

type StateType = {
  people: PersonType[];
  pageInfo: PageInfoType | null;
}

function useGetPeople() {
  const [state, setState] = useState<StateType>({
    people: [],
    pageInfo: null,
  });
  const [getPeople, { data, loading, error }] = useLazyQuery<AllPeopleQueryType>(allPeople);

  useEffect(() => {
    if (!error && (state.pageInfo?.hasNextPage || !state.pageInfo)) {
      getPeople({
        variables: {
          first: 5,
          after: state.pageInfo?.endCursor,
        },
      });
    }
  }, [error, getPeople, state.pageInfo]);

  if (data && state.pageInfo?.endCursor !== data.allPeople.pageInfo?.endCursor) {
    setState(prev => ({
      people: [...prev.people, ...data.allPeople.people],
      pageInfo: data.allPeople.pageInfo
    }));
  }

  return {
    people: state.people,
    loading,
    error: !!error
  };
}

export default useGetPeople;

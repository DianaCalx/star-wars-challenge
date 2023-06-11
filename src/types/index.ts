export type PersonType = {
  id: string;
  name: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  birthYear: string;
  gender: string;
  height: number;
  mass: number;
  species: {
    name: string;
  } | null;
  homeworld: {
    name: string;
  };
  vehicleConnection: {
    vehicles: {
      id: string;
      name: string;
    }[];
  };
};

export type PersonQueryType = {
  person: PersonType;
}

export type PageInfoType = {
  hasNextPage: boolean;
  endCursor: string;
}

export type AllPeopleType = {
  pageInfo: PageInfoType | null;
  totalCount: number;
  people: PersonType[];
};

export type AllPeopleQueryType = {
  allPeople: AllPeopleType;
}

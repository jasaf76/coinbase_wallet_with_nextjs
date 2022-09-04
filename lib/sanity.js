import sanityClient from '@sanity/client'

export const clien03zg2fe6t = sanityClient({
  projectId: "u5i352de",
  dataset: "production",
  apiVersion: "2022-09-04", // use current UTC date - see "specifying API version"!
  token:
    "skZjOA8RidJIzpaHsImCuKuC6HFEsFSdq0yB9Gh46LfiFQfUhMjrujuaHcimyL3koVcMC8p1efTmUcJZcnaoBm8RhqhsuF62MVHR5DWmJ68I5fvaTsmszlzSCP2TvTQu30jUFcS08ctoKOWoCayUHnRS7XCxBOyMnhHKu7CwVDR11ix9xX3z", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

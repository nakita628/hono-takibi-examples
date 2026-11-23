import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRandomAnimeRoute,
  getRandomCharactersRoute,
  getRandomMangaRoute,
  getRandomPeopleRoute,
  getRandomUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const randomHandler = app
  .openapi(getRandomAnimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRandomMangaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRandomCharactersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRandomPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRandomUsersRoute, (c) => {
    throw new Error('Not implemented')
  })

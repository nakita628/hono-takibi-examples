import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHeroesHeroIdDurationsRoute,
  getHeroesHeroIdItemPopularityRoute,
  getHeroesHeroIdMatchesRoute,
  getHeroesHeroIdMatchupsRoute,
  getHeroesHeroIdPlayersRoute,
  getHeroesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const heroesHandler = app
  .openapi(getHeroesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHeroesHeroIdMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHeroesHeroIdMatchupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHeroesHeroIdDurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHeroesHeroIdPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHeroesHeroIdItemPopularityRoute, (c) => {
    throw new Error('Not implemented')
  })

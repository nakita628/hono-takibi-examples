import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGamesV1EventDefinitionsRoute,
  getGamesV1EventsRoute,
  postGamesV1EventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getGamesV1EventDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })

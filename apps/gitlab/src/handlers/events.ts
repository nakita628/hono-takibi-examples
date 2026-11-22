import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4EventsRoute,
  getApiV4ProjectsIdEventsRoute,
  getApiV4UsersIdEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getApiV4ProjectsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })

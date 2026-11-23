import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsYearKeysRoute, getEventsYearRoute, getEventsYearSimpleRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsYearKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsYearSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })

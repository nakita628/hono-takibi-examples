import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventsEventOccurrences202609EventTypesRoute,
  getEventsEventOccurrences202609Route,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getEventsEventOccurrences202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventOccurrences202609EventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })

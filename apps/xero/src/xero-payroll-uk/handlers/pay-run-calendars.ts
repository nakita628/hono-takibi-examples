import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPayRunCalendarsPayRunCalendarIDRoute,
  getPayRunCalendarsRoute,
  postPayRunCalendarsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payRunCalendarsHandler = app
  .openapi(getPayRunCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayRunCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunCalendarsPayRunCalendarIDRoute, (c) => {
    throw new Error('Not implemented')
  })

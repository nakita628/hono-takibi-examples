import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCalendarsIdRoute,
  getCalendarsRoute,
  postCalendarsRoute,
  putCalendarsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarsHandler = app
  .openapi(getCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCalendarsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCalendarsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

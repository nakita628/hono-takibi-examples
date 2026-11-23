import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSchedulesNameRoute,
  getSchedulesNameRoute,
  getSchedulesRoute,
  postSchedulesRoute,
  putSchedulesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app
  .openapi(postSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSchedulesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSchedulesNameRoute, (c) => {
    throw new Error('Not implemented')
  })

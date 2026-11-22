import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsRoute,
  getEventsRoute,
  postRealTimeRoute,
  postRegisterRoute,
  postRestErrorHandlingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realTimeEventsHandler = app
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestErrorHandlingRoute, (c) => {
    throw new Error('Not implemented')
  })

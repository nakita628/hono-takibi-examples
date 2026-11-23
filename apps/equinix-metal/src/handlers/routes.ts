import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoutesIdRoute,
  getRoutesIdEventsRoute,
  getRoutesIdRoute,
  putRoutesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routesHandler = app
  .openapi(deleteRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })

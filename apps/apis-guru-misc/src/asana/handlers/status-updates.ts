import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStatusUpdatesStatusGidRoute,
  getStatusUpdatesRoute,
  getStatusUpdatesStatusGidRoute,
  postStatusUpdatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusUpdatesHandler = app
  .openapi(getStatusUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatusUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStatusUpdatesStatusGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusUpdatesStatusGidRoute, (c) => {
    throw new Error('Not implemented')
  })

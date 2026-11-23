import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStatusUpdatesStatusUpdateGidRoute,
  getStatusUpdatesRoute,
  getStatusUpdatesStatusUpdateGidRoute,
  postStatusUpdatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusUpdatesHandler = app
  .openapi(getStatusUpdatesStatusUpdateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStatusUpdatesStatusUpdateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatusUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })

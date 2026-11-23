import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsIdConnectionSourcesIdSourceRoute,
  getConnectionsIdConnectionLogsRoute,
  getConnectionsIdConnectionSourcesRoute,
  getConnectionsRoute,
  postConnectionsIdConnectionSourcesIdSourceRoute,
  putConnectionsIdConnectionSourcesIdSourceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(getConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsIdConnectionLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsIdConnectionSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsIdConnectionSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsIdConnectionSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsIdConnectionSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })

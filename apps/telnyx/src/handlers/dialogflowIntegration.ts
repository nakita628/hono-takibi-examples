import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDialogflowConnectionsConnectionIdRoute,
  getDialogflowConnectionsConnectionIdRoute,
  postDialogflowConnectionsConnectionIdRoute,
  putDialogflowConnectionsConnectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dialogflowIntegrationHandler = app
  .openapi(deleteDialogflowConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDialogflowConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDialogflowConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDialogflowConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

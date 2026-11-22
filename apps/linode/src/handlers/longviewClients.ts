import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLongviewClientsClientIdRoute,
  getApiVersionLongviewClientsClientIdRoute,
  getApiVersionLongviewClientsRoute,
  postApiVersionLongviewClientsRoute,
  putApiVersionLongviewClientsClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const longviewClientsHandler = app
  .openapi(postApiVersionLongviewClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLongviewClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLongviewClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLongviewClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLongviewClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })

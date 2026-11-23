import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOperationsIdRoute,
  deleteOperationsRoute,
  getOperationsIdRoute,
  getOperationsRoute,
  patchOperationsIdRoute,
  patchOperationsRoute,
  postOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOperationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOperationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

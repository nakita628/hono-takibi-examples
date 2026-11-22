import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SalesRepsIdRoute,
  getV1SalesRepsIdRoute,
  getV1SalesRepsRoute,
  postV1SalesRepsRoute,
  putV1SalesRepsBatchRoute,
  putV1SalesRepsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesRepHandler = app
  .openapi(getV1SalesRepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesRepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesRepsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SalesRepsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesRepsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesRepsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

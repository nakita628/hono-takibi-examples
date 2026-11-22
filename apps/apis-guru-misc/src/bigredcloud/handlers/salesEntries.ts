import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SalesEntriesIdRoute,
  getV1SalesEntriesIdRoute,
  getV1SalesEntriesRoute,
  postV1SalesEntriesRoute,
  putV1SalesEntriesBatchRoute,
  putV1SalesEntriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesEntriesHandler = app
  .openapi(getV1SalesEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesEntriesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SalesEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

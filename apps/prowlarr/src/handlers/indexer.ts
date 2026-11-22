import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1IndexerBulkRoute,
  deleteApiV1IndexerIdRoute,
  getApiV1IndexerIdRoute,
  getApiV1IndexerRoute,
  getApiV1IndexerSchemaRoute,
  postApiV1IndexerActionNameRoute,
  postApiV1IndexerRoute,
  postApiV1IndexerTestallRoute,
  postApiV1IndexerTestRoute,
  putApiV1IndexerBulkRoute,
  putApiV1IndexerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexerHandler = app
  .openapi(getApiV1IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })

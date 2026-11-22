import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3IndexerBulkRoute,
  deleteApiV3IndexerIdRoute,
  getApiV3IndexerIdRoute,
  getApiV3IndexerRoute,
  getApiV3IndexerSchemaRoute,
  postApiV3IndexerActionNameRoute,
  postApiV3IndexerRoute,
  postApiV3IndexerTestallRoute,
  postApiV3IndexerTestRoute,
  putApiV3IndexerBulkRoute,
  putApiV3IndexerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexerHandler = app
  .openapi(getApiV3IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3IndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3IndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3IndexerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3IndexerSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3IndexerTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3IndexerTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3IndexerActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })

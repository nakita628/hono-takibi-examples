import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1IndexerproxyIdRoute,
  getApiV1IndexerproxyIdRoute,
  getApiV1IndexerproxyRoute,
  getApiV1IndexerproxySchemaRoute,
  postApiV1IndexerproxyActionNameRoute,
  postApiV1IndexerproxyRoute,
  postApiV1IndexerproxyTestallRoute,
  postApiV1IndexerproxyTestRoute,
  putApiV1IndexerproxyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexerProxyHandler = app
  .openapi(getApiV1IndexerproxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1IndexerproxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1IndexerproxyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerproxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerproxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerproxySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerproxyTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerproxyTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IndexerproxyActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TokensIdRoute,
  getApiV1TokensCreateRoute,
  getApiV1TokensIdEditRoute,
  getApiV1TokensIdRoute,
  getApiV1TokensRoute,
  postApiV1TokensBulkRoute,
  postApiV1TokensRoute,
  putApiV1TokensIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(getApiV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TokensIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TokensCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensBulkRoute, (c) => {
    throw new Error('Not implemented')
  })

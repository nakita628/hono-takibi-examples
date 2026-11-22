import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionProfileTokensTokenIdRoute,
  getApiVersionProfileTokensRoute,
  getApiVersionProfileTokensTokenIdRoute,
  postApiVersionProfileTokensRoute,
  putApiVersionProfileTokensTokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const personalAccessTokensHandler = app
  .openapi(postApiVersionProfileTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionProfileTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfileTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })

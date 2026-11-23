import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthTokensTokenIdRoute,
  getAuthTokensRoute,
  getAuthTokensTokenIdRoute,
  postAuthTokensRoute,
  putAuthTokensTokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authTokensHandler = app
  .openapi(getAuthTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })

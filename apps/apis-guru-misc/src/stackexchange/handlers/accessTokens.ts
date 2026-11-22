import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccessTokensAccessTokensInvalidateRoute,
  getAccessTokensAccessTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessTokensHandler = app
  .openapi(getAccessTokensAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessTokensAccessTokensInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })

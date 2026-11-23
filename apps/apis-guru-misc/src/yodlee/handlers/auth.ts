import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthApiKeyKeyRoute,
  deleteAuthTokenRoute,
  getAuthApiKeyRoute,
  postAuthApiKeyRoute,
  postAuthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getAuthApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApiKeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

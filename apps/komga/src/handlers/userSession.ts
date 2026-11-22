import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiLogoutRoute, getApiV1LoginSetCookieRoute, postApiLogoutRoute } from '../routes'

const app = new OpenAPIHono()

export const userSessionHandler = app
  .openapi(getApiLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LoginSetCookieRoute, (c) => {
    throw new Error('Not implemented')
  })

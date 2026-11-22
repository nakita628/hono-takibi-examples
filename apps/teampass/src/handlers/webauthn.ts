import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebauthnDeleteRoute,
  getWebauthnListRoute,
  postWebauthnAssertRoute,
  postWebauthnCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webauthnHandler = app
  .openapi(postWebauthnCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebauthnListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebauthnAssertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebauthnDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })

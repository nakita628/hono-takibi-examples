import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthRoute,
  deleteAuthSessionIdRoute,
  getAuthAppRoute,
  getAuthRoute,
  getAuthSessionsRoute,
  getAuthTotpRoute,
  postAuthRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAppRoute, (c) => {
    throw new Error('Not implemented')
  })

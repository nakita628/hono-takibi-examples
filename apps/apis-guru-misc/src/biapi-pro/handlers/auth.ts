import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthTokenRoute,
  getAuthTokenCodeRoute,
  postAuthInitRoute,
  postAuthJwtRoute,
  postAuthRenewRoute,
  postAuthTokenAccessRoute,
  postAuthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTokenCodeRoute, (c) => {
    throw new Error('Not implemented')
  })

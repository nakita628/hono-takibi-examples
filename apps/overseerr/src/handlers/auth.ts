import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthMeRoute,
  postAuthLocalRoute,
  postAuthLogoutRoute,
  postAuthPlexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getAuthMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthPlexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })

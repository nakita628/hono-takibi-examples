import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAuthMeRoute,
  postApiAuthRefreshRoute,
  postApiAuthSigninRoute,
  postApiAuthSignoutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authServiceHandler = app
  .openapi(getApiAuthMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthSigninRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthSignoutRoute, (c) => {
    throw new Error('Not implemented')
  })

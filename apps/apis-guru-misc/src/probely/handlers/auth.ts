import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAuthObtainIndexRoute,
  postAuthRefreshIndexRoute,
  postAuthRevokeIndexRoute,
  postAuthVerifyIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthObtainIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRefreshIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRevokeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthVerifyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

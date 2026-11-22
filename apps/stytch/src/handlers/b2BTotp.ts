import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1B2bTotpAuthenticateRoute,
  postV1B2bTotpMigrateRoute,
  postV1B2bTotpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const b2BTotpHandler = app
  .openapi(postV1B2bTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bTotpAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bTotpMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })

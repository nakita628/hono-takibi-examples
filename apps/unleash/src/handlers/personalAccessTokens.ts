import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminUserTokensIdRoute,
  getApiAdminUserTokensRoute,
  postApiAdminUserTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const personalAccessTokensHandler = app
  .openapi(getApiAdminUserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminUserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminUserTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })

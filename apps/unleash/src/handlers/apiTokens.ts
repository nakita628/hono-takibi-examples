import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminApiTokensTokenRoute,
  getApiAdminApiTokensNameRoute,
  getApiAdminApiTokensRoute,
  postApiAdminApiTokensRoute,
  putApiAdminApiTokensTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiTokensHandler = app
  .openapi(getApiAdminApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminApiTokensNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminApiTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminApiTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1UsersUserKeyTokensClientIdRoute,
  getAdminDirectoryV1UsersUserKeyTokensClientIdRoute,
  getAdminDirectoryV1UsersUserKeyTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(getAdminDirectoryV1UsersUserKeyTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyTokensClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyTokensClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })

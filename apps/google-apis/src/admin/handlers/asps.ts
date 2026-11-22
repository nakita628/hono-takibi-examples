import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1UsersUserKeyAspsCodeIdRoute,
  getAdminDirectoryV1UsersUserKeyAspsCodeIdRoute,
  getAdminDirectoryV1UsersUserKeyAspsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aspsHandler = app
  .openapi(getAdminDirectoryV1UsersUserKeyAspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyAspsCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyAspsCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })

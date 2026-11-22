import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysIdRoute,
  getUserManagementUsersUserIdApiKeysRoute,
  postApiKeysIdExpireRoute,
  postApiKeysValidationsRoute,
  postUserManagementUsersUserIdApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(postApiKeysValidationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysIdExpireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })

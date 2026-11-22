import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserAccountsUserAccountIdRoute,
  getUserAccountsRoute,
  getUserAccountsUserAccountIdRoute,
  patchUserAccountsUserAccountIdRoute,
  postUserAccountsUserAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAccountsFindAndModifyUserAccountsHandler = app
  .openapi(getUserAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserAccountsUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountsUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserAccountsUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAccountsUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })

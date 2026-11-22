import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlatformApiV1AccountsAccountIdAccountUsersRoute,
  getPlatformApiV1AccountsAccountIdAccountUsersRoute,
  postPlatformApiV1AccountsAccountIdAccountUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountUsersHandler = app
  .openapi(getPlatformApiV1AccountsAccountIdAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformApiV1AccountsAccountIdAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlatformApiV1AccountsAccountIdAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdUsersUserIdProfileRoute,
  putV21AccountsAccountIdUsersUserIdProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userProfilesHandler = app
  .openapi(getV21AccountsAccountIdUsersUserIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdOnPremisesSyncBehaviorRoute,
  getUsersUserIdOnPremisesSyncBehaviorRoute,
  patchUsersUserIdOnPremisesSyncBehaviorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersOnPremisesSyncBehaviorHandler = app
  .openapi(getUsersUserIdOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })

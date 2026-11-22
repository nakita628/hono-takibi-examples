import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmAttackDetectionBruteForceUsersRoute,
  deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute,
  getAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attackDetectionHandler = app
  .openapi(deleteAdminRealmsRealmAttackDetectionBruteForceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmAttackDetectionBruteForceUsersRoute,
  deleteRealmAttackDetectionBruteForceUsersUserIdRoute,
  getRealmAttackDetectionBruteForceUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attackDetectionHandler = app
  .openapi(deleteRealmAttackDetectionBruteForceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAttackDetectionBruteForceUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAttackDetectionBruteForceUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })

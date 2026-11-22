import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityProtectionRiskyUsersRiskyUserIdHistoryRiskyUserHistoryItemIdRoute,
  deleteIdentityProtectionRiskyUsersRiskyUserIdRoute,
  getIdentityProtectionRiskyUsersRiskyUserIdHistoryRiskyUserHistoryItemIdRoute,
  getIdentityProtectionRiskyUsersRiskyUserIdHistoryRoute,
  getIdentityProtectionRiskyUsersRiskyUserIdRoute,
  getIdentityProtectionRiskyUsersRoute,
  patchIdentityProtectionRiskyUsersRiskyUserIdHistoryRiskyUserHistoryItemIdRoute,
  patchIdentityProtectionRiskyUsersRiskyUserIdRoute,
  postIdentityProtectionRiskyUsersRiskyUserIdHistoryRoute,
  postIdentityProtectionRiskyUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProtectionRiskyUserHandler = app
  .openapi(getIdentityProtectionRiskyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityProtectionRiskyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityProtectionRiskyUsersRiskyUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProtectionRiskyUsersRiskyUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityProtectionRiskyUsersRiskyUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProtectionRiskyUsersRiskyUserIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityProtectionRiskyUsersRiskyUserIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityProtectionRiskyUsersRiskyUserIdHistoryRiskyUserHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProtectionRiskyUsersRiskyUserIdHistoryRiskyUserHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityProtectionRiskyUsersRiskyUserIdHistoryRiskyUserHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })

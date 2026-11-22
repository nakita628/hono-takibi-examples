import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeScopedRoleMemberOfScopedRoleMembershipIdRoute,
  getMeScopedRoleMemberOfCountRoute,
  getMeScopedRoleMemberOfRoute,
  getMeScopedRoleMemberOfScopedRoleMembershipIdRoute,
  patchMeScopedRoleMemberOfScopedRoleMembershipIdRoute,
  postMeScopedRoleMemberOfRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meScopedRoleMembershipHandler = app
  .openapi(getMeScopedRoleMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeScopedRoleMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeScopedRoleMemberOfScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeScopedRoleMemberOfScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeScopedRoleMemberOfScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeScopedRoleMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })

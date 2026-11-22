import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScopedRoleMembershipsScopedRoleMembershipIdRoute,
  getScopedRoleMembershipsCountRoute,
  getScopedRoleMembershipsRoute,
  getScopedRoleMembershipsScopedRoleMembershipIdRoute,
  patchScopedRoleMembershipsScopedRoleMembershipIdRoute,
  postScopedRoleMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scopedRoleMembershipsScopedRoleMembershipHandler = app
  .openapi(getScopedRoleMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScopedRoleMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScopedRoleMembershipsScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScopedRoleMembershipsScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScopedRoleMembershipsScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScopedRoleMembershipsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

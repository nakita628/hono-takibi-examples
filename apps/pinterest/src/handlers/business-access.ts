import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdRoute,
  postBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsRoute,
  postBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessAccessHandler = app
  .openapi(postBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

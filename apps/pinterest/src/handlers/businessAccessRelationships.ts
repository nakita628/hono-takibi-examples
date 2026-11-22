import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBusinessesBusinessIdMembersRoute,
  deleteBusinessesBusinessIdPartnersRoute,
  getBusinessesBusinessIdMembersRoute,
  getBusinessesBusinessIdPartnersRoute,
  getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsRoute,
  getBusinessesEmployersRoute,
  patchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdRoute,
  patchBusinessesBusinessIdMembersRoute,
  patchBusinessesBusinessIdSystemUsersSystemUserIdRoute,
  postBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessAccessRelationshipsHandler = app
  .openapi(postBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getBusinessesEmployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdSystemUsersSystemUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })

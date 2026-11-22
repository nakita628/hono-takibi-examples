import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdUserSecurityLdapUserToDNMappingRoute,
  getApiAtlasV2GroupsGroupIdUserSecurityLdapVerifyRequestIdRoute,
  getApiAtlasV2GroupsGroupIdUserSecurityRoute,
  patchApiAtlasV2GroupsGroupIdUserSecurityRoute,
  postApiAtlasV2GroupsGroupIdUserSecurityLdapVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ldapConfigurationHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdUserSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdUserSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdUserSecurityLdapUserToDNMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdUserSecurityLdapVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdUserSecurityLdapVerifyRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })

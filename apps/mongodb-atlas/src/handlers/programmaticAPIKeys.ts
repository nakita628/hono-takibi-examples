import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdApiKeysApiUserIdRoute,
  deleteApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListIpAddressRoute,
  deleteApiAtlasV2OrgsOrgIdApiKeysApiUserIdRoute,
  getApiAtlasV2GroupsGroupIdApiKeysRoute,
  getApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListIpAddressRoute,
  getApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListRoute,
  getApiAtlasV2OrgsOrgIdApiKeysApiUserIdRoute,
  getApiAtlasV2OrgsOrgIdApiKeysRoute,
  patchApiAtlasV2GroupsGroupIdApiKeysApiUserIdRoute,
  patchApiAtlasV2OrgsOrgIdApiKeysApiUserIdRoute,
  postApiAtlasV2GroupsGroupIdApiKeysApiUserIdRoute,
  postApiAtlasV2GroupsGroupIdApiKeysRoute,
  postApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListRoute,
  postApiAtlasV2OrgsOrgIdApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const programmaticAPIKeysHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdApiKeysApiUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdApiKeysApiUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdApiKeysApiUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdApiKeysApiUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdApiKeysApiUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdApiKeysApiUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdApiKeysApiUserIdAccessListIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute,
  getDirectoryRemoteTenantGroupsCountRoute,
  getDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute,
  getDirectoryRemoteTenantGroupsRoute,
  patchDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute,
  postDirectoryRemoteTenantGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRemoteTenantGroupHandler = app
  .openapi(getDirectoryRemoteTenantGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRemoteTenantGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRemoteTenantGroupsRemoteTenantGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRemoteTenantGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

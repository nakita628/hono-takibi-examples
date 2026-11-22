import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdPermissionsPermissionIdRoute,
  getSitesSiteIdGetByPathPathPathPermissionsRoute,
  getSitesSiteIdPermissionsCountRoute,
  getSitesSiteIdPermissionsPermissionIdRoute,
  getSitesSiteIdPermissionsRoute,
  patchSitesSiteIdPermissionsPermissionIdRoute,
  postSitesSiteIdGetByPathPathPathPermissionsRoute,
  postSitesSiteIdPermissionsPermissionIdGrantRoute,
  postSitesSiteIdPermissionsPermissionIdRevokeGrantsRoute,
  postSitesSiteIdPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesPermissionHandler = app
  .openapi(getSitesSiteIdGetByPathPathPathPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGetByPathPathPathPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdPermissionsPermissionIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdPermissionsPermissionIdRevokeGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdPermissionsPermissionIdRoute,
  getSitesSiteIdPermissionsPermissionIdRoute,
  getSitesSiteIdPermissionsRoute,
  patchSitesSiteIdPermissionsPermissionIdRoute,
  postSitesSiteIdPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesPermissionHandler = app
  .openapi(getSitesSiteIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

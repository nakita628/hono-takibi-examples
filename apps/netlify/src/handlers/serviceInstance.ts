import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdServicesAddonInstancesInstanceIdRoute,
  getSitesSiteIdServiceInstancesRoute,
  getSitesSiteIdServicesAddonInstancesInstanceIdRoute,
  postSitesSiteIdServicesAddonInstancesRoute,
  putSitesSiteIdServicesAddonInstancesInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceInstanceHandler = app
  .openapi(getSitesSiteIdServiceInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdServicesAddonInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdServicesAddonInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdServicesAddonInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdServicesAddonInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

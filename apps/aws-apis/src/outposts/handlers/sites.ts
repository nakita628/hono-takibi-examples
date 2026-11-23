import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdRoute,
  getSitesRoute,
  getSitesSiteIdAddressAddressTypeRoute,
  getSitesSiteIdRoute,
  patchSitesSiteIdRackPhysicalPropertiesRoute,
  patchSitesSiteIdRoute,
  postSitesRoute,
  putSitesSiteIdAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(postSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAddressAddressTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdRackPhysicalPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })

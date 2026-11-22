import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdGatewaysIdRoute,
  getSitesSiteIdGatewaysIdRoute,
  getSitesSiteIdGatewaysRoute,
  patchSitesSiteIdGatewaysIdRoute,
  postSitesSiteIdGatewaysRoute,
  putSitesSiteIdGatewaysIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gatewaysHandler = app
  .openapi(deleteSitesSiteIdGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })

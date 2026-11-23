import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesIdRoute,
  deleteSitesSiteIdGatewaysIdRoute,
  deleteSitesSiteIdGatewayTokensIdRoute,
  deleteSitesSiteIdGatewayTokensRoute,
  getSitesIdRoute,
  getSitesRoute,
  getSitesSiteIdGatewaysIdRoute,
  getSitesSiteIdGatewaysRoute,
  patchSitesIdRoute,
  patchSitesSiteIdGatewaysIdRoute,
  postSitesRoute,
  postSitesSiteIdGatewaysGatewayIdTokenRotateRoute,
  postSitesSiteIdGatewaysGatewayIdTokenRoute,
  postSitesSiteIdGatewaysRoute,
  postSitesSiteIdGatewayTokensRoute,
  putSitesIdRoute,
  putSitesSiteIdGatewaysIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
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
  .openapi(deleteSitesSiteIdGatewayTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdGatewayTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGatewayTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGatewaysGatewayIdTokenRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGatewaysGatewayIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

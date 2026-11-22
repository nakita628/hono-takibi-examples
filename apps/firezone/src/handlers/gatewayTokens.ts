import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdGatewayTokensIdRoute,
  deleteSitesSiteIdGatewayTokensRoute,
  postSitesSiteIdGatewaysGatewayIdTokenRotateRoute,
  postSitesSiteIdGatewaysGatewayIdTokenRoute,
  postSitesSiteIdGatewayTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gatewayTokensHandler = app
  .openapi(deleteSitesSiteIdGatewayTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdGatewayTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGatewayTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGatewaysGatewayIdTokenRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGatewaysGatewayIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

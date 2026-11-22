import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute,
  getApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute,
  getApiV1OrgsOrgIdGatewaytemplatesRoute,
  getApiV1OrgsOrgIdNetworksNetworkIdRoute,
  postApiV1OrgsOrgIdGatewaytemplatesRoute,
  putApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsGatewayTemplatesHandler = app
  .openapi(getApiV1OrgsOrgIdGatewaytemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdGatewaytemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })

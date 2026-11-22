import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdNetworksNetworkIdRoute,
  getApiV1OrgsOrgIdNetworksRoute,
  postApiV1OrgsOrgIdNetworksRoute,
  putApiV1OrgsOrgIdNetworksNetworkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsNetworksHandler = app
  .openapi(getApiV1OrgsOrgIdNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })

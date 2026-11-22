import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute,
  getApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute,
  getApiV1OrgsOrgIdNetworktemplatesRoute,
  postApiV1OrgsOrgIdNetworktemplatesRoute,
  putApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsNetworkTemplatesHandler = app
  .openapi(getApiV1OrgsOrgIdNetworktemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdNetworktemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })

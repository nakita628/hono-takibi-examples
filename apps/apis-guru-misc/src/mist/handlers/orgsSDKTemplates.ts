import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute,
  getApiV1OrgsOrgIdSdktemplatesRoute,
  getApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute,
  postApiV1OrgsOrgIdSdktemplatesRoute,
  putApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSDKTemplatesHandler = app
  .openapi(getApiV1OrgsOrgIdSdktemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSdktemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })

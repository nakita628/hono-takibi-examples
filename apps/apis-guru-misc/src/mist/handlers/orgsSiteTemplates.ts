import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute,
  getApiV1OrgsOrgIdSitetemplatesRoute,
  getApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute,
  postApiV1OrgsOrgIdSitetemplatesRoute,
  putApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSiteTemplatesHandler = app
  .openapi(getApiV1OrgsOrgIdSitetemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSitetemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })

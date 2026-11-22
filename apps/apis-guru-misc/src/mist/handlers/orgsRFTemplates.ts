import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdRftemplatesRftemplateIdRoute,
  getApiV1OrgsOrgIdRftemplatesRftemplateIdRoute,
  getApiV1OrgsOrgIdRftemplatesRoute,
  postApiV1OrgsOrgIdRftemplatesRoute,
  putApiV1OrgsOrgIdRftemplatesRftemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsRFTemplatesHandler = app
  .openapi(getApiV1OrgsOrgIdRftemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdRftemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdRftemplatesRftemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdRftemplatesRftemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdRftemplatesRftemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })

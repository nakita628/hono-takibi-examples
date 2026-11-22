import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdAptemplatesAptemplateIdRoute,
  getApiV1OrgsOrgIdAptemplatesAptemplateIdRoute,
  getApiV1OrgsOrgIdAptemplatesRoute,
  postApiV1OrgsOrgIdAptemplatesRoute,
  putApiV1OrgsOrgIdAptemplatesAptemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsAPTemplatesHandler = app
  .openapi(getApiV1OrgsOrgIdAptemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAptemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAptemplatesAptemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAptemplatesAptemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAptemplatesAptemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })

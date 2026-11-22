import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdServicesServiceIdRoute,
  getApiV1OrgsOrgIdServicesRoute,
  getApiV1OrgsOrgIdServicesServiceIdRoute,
  postApiV1OrgsOrgIdServicesRoute,
  putApiV1OrgsOrgIdServicesServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsServicesHandler = app
  .openapi(getApiV1OrgsOrgIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

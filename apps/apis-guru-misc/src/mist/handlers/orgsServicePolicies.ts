import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute,
  getApiV1OrgsOrgIdServicepoliciesRoute,
  getApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute,
  postApiV1OrgsOrgIdServicepoliciesRoute,
  putApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsServicePoliciesHandler = app
  .openapi(getApiV1OrgsOrgIdServicepoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdServicepoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })

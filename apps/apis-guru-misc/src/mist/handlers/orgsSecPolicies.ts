import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute,
  getApiV1OrgsOrgIdSecpoliciesRoute,
  getApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute,
  postApiV1OrgsOrgIdSecpoliciesRoute,
  putApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSecPoliciesHandler = app
  .openapi(getApiV1OrgsOrgIdSecpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSecpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })

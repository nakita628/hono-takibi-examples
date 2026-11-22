import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2OrgsOrgIdResourcePoliciesResourcePolicyIdRoute,
  getApiAtlasV2OrgsOrgIdNonCompliantResourcesRoute,
  getApiAtlasV2OrgsOrgIdResourcePoliciesResourcePolicyIdRoute,
  getApiAtlasV2OrgsOrgIdResourcePoliciesRoute,
  patchApiAtlasV2OrgsOrgIdResourcePoliciesResourcePolicyIdRoute,
  postApiAtlasV2OrgsOrgIdResourcePoliciesRoute,
  postApiAtlasV2OrgsOrgIdResourcePoliciesValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcePoliciesHandler = app
  .openapi(getApiAtlasV2OrgsOrgIdNonCompliantResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdResourcePoliciesResourcePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdResourcePoliciesResourcePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdResourcePoliciesResourcePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdResourcePoliciesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })

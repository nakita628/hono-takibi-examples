import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RestrictionPolicyResourceIdRoute,
  getApiV2RestrictionPolicyResourceIdRoute,
  postApiV2RestrictionPolicyResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restrictionPoliciesHandler = app
  .openapi(deleteApiV2RestrictionPolicyResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RestrictionPolicyResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RestrictionPolicyResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

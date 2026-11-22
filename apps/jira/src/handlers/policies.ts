import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3PoliciesProjectProjectIdOrKeyRoute,
  getRestApi3PoliciesProjectProjectIdOrKeyRulesRoute,
  getRestApi3PoliciesRoute,
  postRestApi3PoliciesPolicyIdApplyRoute,
  postRestApi3PoliciesPolicyIdRemoveRoute,
  postRestApi3PoliciesProjectProjectIdOrKeyValidateRoute,
  putRestApi3PoliciesProjectProjectIdOrKeyPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(getRestApi3PoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PoliciesProjectProjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PoliciesProjectProjectIdOrKeyPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PoliciesProjectProjectIdOrKeyRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PoliciesProjectProjectIdOrKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PoliciesPolicyIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PoliciesPolicyIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRetentionPoliciesRetentionPolicyIdRoute,
  getRetentionPoliciesRetentionPolicyIdAssignmentsRoute,
  getRetentionPoliciesRetentionPolicyIdRoute,
  getRetentionPoliciesRoute,
  postRetentionPoliciesRoute,
  putRetentionPoliciesRetentionPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const retentionPoliciesHandler = app
  .openapi(getRetentionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRetentionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetentionPoliciesRetentionPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRetentionPoliciesRetentionPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRetentionPoliciesRetentionPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetentionPoliciesRetentionPolicyIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEscalationPoliciesIdRoute,
  getEscalationPoliciesIdAuditRecordsRoute,
  getEscalationPoliciesIdRoute,
  getEscalationPoliciesRoute,
  postEscalationPoliciesRoute,
  putEscalationPoliciesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const escalationPoliciesHandler = app
  .openapi(getEscalationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEscalationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEscalationPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEscalationPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEscalationPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEscalationPoliciesIdAuditRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })

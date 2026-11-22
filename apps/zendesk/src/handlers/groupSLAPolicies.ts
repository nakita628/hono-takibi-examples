import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute,
  getApiV2GroupSlasPoliciesDefinitionsRoute,
  getApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute,
  getApiV2GroupSlasPoliciesRoute,
  getApiV2TicketsTicketIdGroupSlasPolicyMetricsRoute,
  postApiV2GroupSlasPoliciesRoute,
  putApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute,
  putApiV2GroupSlasPoliciesReorderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupSLAPoliciesHandler = app
  .openapi(getApiV2GroupSlasPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GroupSlasPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupSlasPoliciesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GroupSlasPoliciesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdGroupSlasPolicyMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })

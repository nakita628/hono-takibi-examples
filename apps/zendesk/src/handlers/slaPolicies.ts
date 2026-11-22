import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2SlasPoliciesSlaPolicyIdRoute,
  getApiV2SlasPoliciesDefinitionsRoute,
  getApiV2SlasPoliciesRoute,
  getApiV2SlasPoliciesSlaPolicyIdRoute,
  getApiV2TicketsTicketIdSlasPolicyMetricsRoute,
  postApiV2SlasPoliciesRoute,
  putApiV2SlasPoliciesReorderRoute,
  putApiV2SlasPoliciesSlaPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slaPoliciesHandler = app
  .openapi(getApiV2SlasPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SlasPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SlasPoliciesSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SlasPoliciesSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SlasPoliciesSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SlasPoliciesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SlasPoliciesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdSlasPolicyMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1BillingOrganizationIdPositionsRoute,
  getApiV1BillingOrganizationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getApiV1BillingOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingOrganizationIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })

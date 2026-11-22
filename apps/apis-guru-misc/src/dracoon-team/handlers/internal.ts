import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4InternalTenantSubscriptionPlanRoute,
  putV4InternalTenantSubscriptionPlanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internalHandler = app
  .openapi(getV4InternalTenantSubscriptionPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4InternalTenantSubscriptionPlanRoute, (c) => {
    throw new Error('Not implemented')
  })

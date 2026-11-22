import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVirtualBillingMeterActiveRoute,
  postApiVirtualBillingMeterActiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const virtualBillingMeterActiveHandler = app
  .openapi(getApiVirtualBillingMeterActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVirtualBillingMeterActiveRoute, (c) => {
    throw new Error('Not implemented')
  })

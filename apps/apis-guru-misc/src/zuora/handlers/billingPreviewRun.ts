import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BillingPreviewRunsBillingPreviewRunIdRoute,
  postV1BillingPreviewRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingPreviewRunHandler = app
  .openapi(postV1BillingPreviewRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingPreviewRunsBillingPreviewRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })

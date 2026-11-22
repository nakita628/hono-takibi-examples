import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609CommercePaymentsGdprDeleteRoute,
  postCrmObjects202609CommercePaymentsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609CommercePaymentsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })

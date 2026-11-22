import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameRoute,
  putApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameRoute,
  putApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customDataHandler = app
  .openapi(putApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })

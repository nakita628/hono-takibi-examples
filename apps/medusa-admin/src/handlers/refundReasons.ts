import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRefundReasonsIdRoute,
  getAdminRefundReasonsIdRoute,
  getAdminRefundReasonsRoute,
  postAdminRefundReasonsIdRoute,
  postAdminRefundReasonsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const refundReasonsHandler = app
  .openapi(getAdminRefundReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRefundReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRefundReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRefundReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRefundReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

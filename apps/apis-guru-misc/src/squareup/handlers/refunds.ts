import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2RefundsRefundIdRoute, getV2RefundsRoute, postV2RefundsRoute } from '../routes'

const app = new OpenAPIHono()

export const refundsHandler = app
  .openapi(getV2RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })

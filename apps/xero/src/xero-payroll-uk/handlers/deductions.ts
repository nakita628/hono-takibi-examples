import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeductionsDeductionIdRoute, getDeductionsRoute, postDeductionsRoute } from '../routes'

const app = new OpenAPIHono()

export const deductionsHandler = app
  .openapi(getDeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeductionsDeductionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

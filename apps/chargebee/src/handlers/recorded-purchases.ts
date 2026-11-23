import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecordedPurchasesRecordedPurchaseIdRoute, postRecordedPurchasesRoute } from '../routes'

const app = new OpenAPIHono()

export const recordedPurchasesHandler = app
  .openapi(getRecordedPurchasesRecordedPurchaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecordedPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })

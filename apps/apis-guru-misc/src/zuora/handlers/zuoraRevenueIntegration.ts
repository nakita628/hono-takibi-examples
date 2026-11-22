import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1RevproAccountingCodesRoute } from '../routes'

const app = new OpenAPIHono()

export const zuoraRevenueIntegrationHandler = app.openapi(putV1RevproAccountingCodesRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi1ReportsGeneralLedgersRoute } from '../routes'

const app = new OpenAPIHono()

export const generalLedgersHandler = app.openapi(getApi1ReportsGeneralLedgersRoute, (c) => {
  throw new Error('Not implemented')
})

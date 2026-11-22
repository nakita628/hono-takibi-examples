import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CompanyCreditsHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const companyCreditsHistoryHandler = app.openapi(getV1CompanyCreditsHistoryRoute, (c) => {
  throw new Error('Not implemented')
})

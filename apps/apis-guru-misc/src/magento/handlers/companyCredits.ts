import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CompanyCreditsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const companyCreditsHandler = app.openapi(getV1CompanyCreditsIndexRoute, (c) => {
  throw new Error('Not implemented')
})

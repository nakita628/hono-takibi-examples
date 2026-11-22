import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CompanyCreditsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const companyCreditsIdHandler = app.openapi(putV1CompanyCreditsIdRoute, (c) => {
  throw new Error('Not implemented')
})

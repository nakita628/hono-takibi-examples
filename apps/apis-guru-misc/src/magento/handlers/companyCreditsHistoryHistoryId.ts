import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CompanyCreditsHistoryHistoryIdRoute } from '../routes'

const app = new OpenAPIHono()

export const companyCreditsHistoryHistoryIdHandler = app.openapi(
  putV1CompanyCreditsHistoryHistoryIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

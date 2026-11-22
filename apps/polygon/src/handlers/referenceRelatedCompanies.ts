import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1RelatedCompaniesTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceRelatedCompaniesHandler = app.openapi(
  getV1RelatedCompaniesTickerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1VatAnalysisTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const vatAnalysisTypesHandler = app.openapi(getV1VatAnalysisTypesRoute, (c) => {
  throw new Error('Not implemented')
})

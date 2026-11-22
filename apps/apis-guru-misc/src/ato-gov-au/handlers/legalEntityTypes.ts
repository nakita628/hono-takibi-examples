import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsLegalEntityTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const legalEntityTypesHandler = app.openapi(getClassificationsLegalEntityTypesRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseDocumentCaseDocumentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const caseDocumentHandler = app.openapi(getCaseDocumentCaseDocumentIdRoute, (c) => {
  throw new Error('Not implemented')
})

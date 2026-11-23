import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseDocumentDownloadCaseDocumentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const caseDocumentDownloadHandler = app.openapi(
  getCaseDocumentDownloadCaseDocumentIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

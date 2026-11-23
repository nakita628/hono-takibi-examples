import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssessmentReportsRoute, postAssessmentReportsIntegrityRoute } from '../routes'

const app = new OpenAPIHono()

export const assessmentReportsHandler = app
  .openapi(getAssessmentReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssessmentReportsIntegrityRoute, (c) => {
    throw new Error('Not implemented')
  })

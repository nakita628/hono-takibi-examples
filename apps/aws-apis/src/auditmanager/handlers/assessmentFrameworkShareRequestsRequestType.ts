import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssessmentFrameworkShareRequestsRequestTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const assessmentFrameworkShareRequestsRequestTypeHandler = app.openapi(
  getAssessmentFrameworkShareRequestsRequestTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

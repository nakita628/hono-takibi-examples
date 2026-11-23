import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssessmentFrameworksFrameworkTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const assessmentFrameworksFrameworkTypeHandler = app.openapi(
  getAssessmentFrameworksFrameworkTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

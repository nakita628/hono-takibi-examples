import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceGetAssessmentReportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceGetAssessmentReportHandler = app.openapi(
  postXAmzTargetInspectorServiceGetAssessmentReportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

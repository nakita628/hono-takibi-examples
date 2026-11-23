import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceStopAssessmentRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceStopAssessmentRunHandler = app.openapi(
  postXAmzTargetInspectorServiceStopAssessmentRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

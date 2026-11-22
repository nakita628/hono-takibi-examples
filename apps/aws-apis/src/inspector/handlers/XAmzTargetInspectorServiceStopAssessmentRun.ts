import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceStopAssessmentRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceStopAssessmentRunHandler = app.openapi(
  postXAmzTargetInspectorServiceStopAssessmentRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

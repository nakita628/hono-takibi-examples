import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStartMlLabelingSetGenerationTaskRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartMLLabelingSetGenerationTaskRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

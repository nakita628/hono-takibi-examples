import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartImportLabelsTaskRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStartImportLabelsTaskRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartImportLabelsTaskRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

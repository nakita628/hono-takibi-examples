import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartImportLabelsTaskRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStartImportLabelsTaskRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartImportLabelsTaskRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

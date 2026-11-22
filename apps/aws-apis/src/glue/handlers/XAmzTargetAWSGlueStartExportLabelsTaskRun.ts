import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartExportLabelsTaskRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStartExportLabelsTaskRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartExportLabelsTaskRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

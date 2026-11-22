import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelCardExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeModelCardExportJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelCardExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

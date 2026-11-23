import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelCardExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeModelCardExportJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelCardExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

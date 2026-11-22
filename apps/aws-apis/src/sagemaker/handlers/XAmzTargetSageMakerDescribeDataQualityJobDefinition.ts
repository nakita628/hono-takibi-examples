import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeDataQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeDataQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeDataQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeDataQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeDataQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeDataQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

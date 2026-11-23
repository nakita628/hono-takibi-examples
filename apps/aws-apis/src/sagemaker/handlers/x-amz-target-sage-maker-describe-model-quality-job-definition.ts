import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeModelQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeModelQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

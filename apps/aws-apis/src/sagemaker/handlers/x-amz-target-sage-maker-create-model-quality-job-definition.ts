import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateModelQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

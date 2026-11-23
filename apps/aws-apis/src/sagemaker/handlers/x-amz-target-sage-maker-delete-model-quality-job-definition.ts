import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteModelQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteModelQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

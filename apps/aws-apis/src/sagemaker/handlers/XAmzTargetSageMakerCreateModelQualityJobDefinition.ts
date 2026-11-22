import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateModelQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelBiasJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateModelBiasJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelBiasJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

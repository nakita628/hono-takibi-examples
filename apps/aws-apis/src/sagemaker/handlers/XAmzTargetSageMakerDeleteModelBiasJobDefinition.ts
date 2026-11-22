import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelBiasJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteModelBiasJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelBiasJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

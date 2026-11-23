import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelBiasJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteModelBiasJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelBiasJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

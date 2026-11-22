import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelBiasJobDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListModelBiasJobDefinitionsHandler = app.openapi(
  postXAmzTargetSageMakerListModelBiasJobDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

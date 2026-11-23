import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelBiasJobDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListModelBiasJobDefinitionsHandler = app.openapi(
  postXAmzTargetSageMakerListModelBiasJobDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

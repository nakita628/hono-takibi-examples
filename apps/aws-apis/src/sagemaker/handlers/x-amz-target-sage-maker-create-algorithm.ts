import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateAlgorithmRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateAlgorithmHandler = app.openapi(
  postXAmzTargetSageMakerCreateAlgorithmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

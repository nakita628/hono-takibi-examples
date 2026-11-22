import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteAlgorithmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteAlgorithmHandler = app.openapi(
  postXAmzTargetSageMakerDeleteAlgorithmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

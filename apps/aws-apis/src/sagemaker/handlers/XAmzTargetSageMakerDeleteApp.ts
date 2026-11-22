import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteAppRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteAppHandler = app.openapi(
  postXAmzTargetSageMakerDeleteAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

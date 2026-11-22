import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteProjectHandler = app.openapi(
  postXAmzTargetSageMakerDeleteProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

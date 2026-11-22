import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteUserProfileHandler = app.openapi(
  postXAmzTargetSageMakerDeleteUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

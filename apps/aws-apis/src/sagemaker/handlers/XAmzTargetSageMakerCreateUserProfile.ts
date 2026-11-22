import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateUserProfileHandler = app.openapi(
  postXAmzTargetSageMakerCreateUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

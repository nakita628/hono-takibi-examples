import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateUserProfileHandler = app.openapi(
  postXAmzTargetSageMakerCreateUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateUserProfileHandler = app.openapi(
  postXAmzTargetSageMakerUpdateUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

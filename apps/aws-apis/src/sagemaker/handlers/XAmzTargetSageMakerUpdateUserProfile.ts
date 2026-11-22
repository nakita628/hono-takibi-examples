import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateUserProfileHandler = app.openapi(
  postXAmzTargetSageMakerUpdateUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

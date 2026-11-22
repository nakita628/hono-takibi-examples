import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListUserProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListUserProfilesHandler = app.openapi(
  postXAmzTargetSageMakerListUserProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

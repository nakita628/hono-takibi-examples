import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListUserProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListUserProfilesHandler = app.openapi(
  postXAmzTargetSageMakerListUserProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

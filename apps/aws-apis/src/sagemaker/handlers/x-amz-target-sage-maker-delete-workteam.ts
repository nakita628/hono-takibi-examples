import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteWorkteamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteWorkteamHandler = app.openapi(
  postXAmzTargetSageMakerDeleteWorkteamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

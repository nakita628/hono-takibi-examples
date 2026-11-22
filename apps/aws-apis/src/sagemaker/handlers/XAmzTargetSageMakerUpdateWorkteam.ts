import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateWorkteamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateWorkteamHandler = app.openapi(
  postXAmzTargetSageMakerUpdateWorkteamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

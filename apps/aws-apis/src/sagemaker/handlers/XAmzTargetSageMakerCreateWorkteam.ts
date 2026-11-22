import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateWorkteamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateWorkteamHandler = app.openapi(
  postXAmzTargetSageMakerCreateWorkteamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

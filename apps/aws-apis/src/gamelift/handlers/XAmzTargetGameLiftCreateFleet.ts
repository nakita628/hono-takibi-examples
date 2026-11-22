import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreateFleetHandler = app.openapi(
  postXAmzTargetGameLiftCreateFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

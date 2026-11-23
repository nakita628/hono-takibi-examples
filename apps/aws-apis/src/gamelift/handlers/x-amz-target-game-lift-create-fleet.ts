import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreateFleetHandler = app.openapi(
  postXAmzTargetGameLiftCreateFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

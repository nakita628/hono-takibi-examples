import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftGetInstanceAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftGetInstanceAccessHandler = app.openapi(
  postXAmzTargetGameLiftGetInstanceAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

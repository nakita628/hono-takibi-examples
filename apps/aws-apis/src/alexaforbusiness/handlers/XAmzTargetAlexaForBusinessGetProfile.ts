import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessGetProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

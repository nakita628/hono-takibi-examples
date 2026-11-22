import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

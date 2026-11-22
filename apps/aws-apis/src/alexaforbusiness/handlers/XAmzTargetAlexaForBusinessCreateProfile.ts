import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessCreateProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

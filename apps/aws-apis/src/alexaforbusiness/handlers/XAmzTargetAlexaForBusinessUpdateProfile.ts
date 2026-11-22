import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUpdateProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateContactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessCreateContactHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

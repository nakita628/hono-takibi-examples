import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateContactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUpdateContactHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

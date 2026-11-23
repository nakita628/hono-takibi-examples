import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetContactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessGetContactHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

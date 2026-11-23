import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateContactRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessCreateContactHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

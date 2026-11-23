import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUpdateProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessGetProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

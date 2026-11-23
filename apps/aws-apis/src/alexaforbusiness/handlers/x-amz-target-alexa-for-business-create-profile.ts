import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessCreateProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

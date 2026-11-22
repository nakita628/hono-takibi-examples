import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessCreateUserHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

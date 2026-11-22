import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteUserHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDeleteUserHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessTagResourceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

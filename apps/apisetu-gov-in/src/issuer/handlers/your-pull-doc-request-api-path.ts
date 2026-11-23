import { OpenAPIHono } from '@hono/zod-openapi'
import { postYourPullDOCRequestAPIPathRoute } from '../routes'

const app = new OpenAPIHono()

export const yourPullDocRequestApiPathHandler = app.openapi(
  postYourPullDOCRequestAPIPathRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

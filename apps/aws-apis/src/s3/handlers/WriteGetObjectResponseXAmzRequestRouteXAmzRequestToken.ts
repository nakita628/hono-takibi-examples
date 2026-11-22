import { OpenAPIHono } from '@hono/zod-openapi'
import { postWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const WriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenHandler = app.openapi(
  postWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

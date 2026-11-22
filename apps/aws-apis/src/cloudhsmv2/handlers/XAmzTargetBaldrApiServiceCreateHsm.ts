import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceCreateHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetBaldrApiServiceCreateHsmHandler = app.openapi(
  postXAmzTargetBaldrApiServiceCreateHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

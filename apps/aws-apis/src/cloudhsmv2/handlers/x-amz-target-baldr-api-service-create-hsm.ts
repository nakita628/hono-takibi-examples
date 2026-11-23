import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceCreateHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceCreateHsmHandler = app.openapi(
  postXAmzTargetBaldrApiServiceCreateHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

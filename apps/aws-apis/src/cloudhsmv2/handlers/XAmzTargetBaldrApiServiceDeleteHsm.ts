import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceDeleteHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetBaldrApiServiceDeleteHsmHandler = app.openapi(
  postXAmzTargetBaldrApiServiceDeleteHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

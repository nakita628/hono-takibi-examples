import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceDeleteHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceDeleteHsmHandler = app.openapi(
  postXAmzTargetBaldrApiServiceDeleteHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

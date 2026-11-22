import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeregisterFromWorkMailRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeregisterFromWorkMailHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeregisterFromWorkMailRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

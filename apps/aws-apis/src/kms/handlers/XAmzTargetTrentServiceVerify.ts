import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceVerifyHandler = app.openapi(
  postXAmzTargetTrentServiceVerifyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

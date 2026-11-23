import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceVerifyMacRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceVerifyMacHandler = app.openapi(
  postXAmzTargetTrentServiceVerifyMacRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

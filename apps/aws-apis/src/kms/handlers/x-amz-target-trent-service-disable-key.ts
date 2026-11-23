import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDisableKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceDisableKeyHandler = app.openapi(
  postXAmzTargetTrentServiceDisableKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGetPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceGetPublicKeyHandler = app.openapi(
  postXAmzTargetTrentServiceGetPublicKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGetKeyRotationStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceGetKeyRotationStatusHandler = app.openapi(
  postXAmzTargetTrentServiceGetKeyRotationStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateImageVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateImageVersionHandler = app.openapi(
  postXAmzTargetSageMakerUpdateImageVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

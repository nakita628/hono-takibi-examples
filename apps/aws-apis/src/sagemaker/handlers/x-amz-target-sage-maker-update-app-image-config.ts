import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateAppImageConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateAppImageConfigHandler = app.openapi(
  postXAmzTargetSageMakerUpdateAppImageConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

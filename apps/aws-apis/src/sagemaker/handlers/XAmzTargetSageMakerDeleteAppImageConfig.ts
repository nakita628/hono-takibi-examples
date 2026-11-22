import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteAppImageConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteAppImageConfigHandler = app.openapi(
  postXAmzTargetSageMakerDeleteAppImageConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

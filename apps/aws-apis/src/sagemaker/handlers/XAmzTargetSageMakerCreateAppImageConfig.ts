import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateAppImageConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateAppImageConfigHandler = app.openapi(
  postXAmzTargetSageMakerCreateAppImageConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

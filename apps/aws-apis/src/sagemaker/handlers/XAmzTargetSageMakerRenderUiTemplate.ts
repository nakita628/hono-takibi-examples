import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerRenderUiTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerRenderUiTemplateHandler = app.openapi(
  postXAmzTargetSageMakerRenderUiTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

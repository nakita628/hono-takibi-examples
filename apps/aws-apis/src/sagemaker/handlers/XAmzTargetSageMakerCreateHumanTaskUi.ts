import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateHumanTaskUiRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateHumanTaskUiHandler = app.openapi(
  postXAmzTargetSageMakerCreateHumanTaskUiRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteHumanTaskUiRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteHumanTaskUiHandler = app.openapi(
  postXAmzTargetSageMakerDeleteHumanTaskUiRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

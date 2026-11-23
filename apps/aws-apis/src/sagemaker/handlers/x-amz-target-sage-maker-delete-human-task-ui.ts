import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteHumanTaskUiRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteHumanTaskUiHandler = app.openapi(
  postXAmzTargetSageMakerDeleteHumanTaskUiRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

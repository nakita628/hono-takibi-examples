import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateActionHandler = app.openapi(
  postXAmzTargetSageMakerUpdateActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

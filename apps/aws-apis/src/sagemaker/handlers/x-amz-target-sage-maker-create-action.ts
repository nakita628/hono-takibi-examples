import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateActionHandler = app.openapi(
  postXAmzTargetSageMakerCreateActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

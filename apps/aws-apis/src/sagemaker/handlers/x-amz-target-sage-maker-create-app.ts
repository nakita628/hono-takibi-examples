import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateAppRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateAppHandler = app.openapi(
  postXAmzTargetSageMakerCreateAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

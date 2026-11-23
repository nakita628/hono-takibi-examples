import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteImageVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteImageVersionHandler = app.openapi(
  postXAmzTargetSageMakerDeleteImageVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

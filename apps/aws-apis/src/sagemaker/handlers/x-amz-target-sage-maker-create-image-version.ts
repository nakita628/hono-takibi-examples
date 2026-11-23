import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateImageVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateImageVersionHandler = app.openapi(
  postXAmzTargetSageMakerCreateImageVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

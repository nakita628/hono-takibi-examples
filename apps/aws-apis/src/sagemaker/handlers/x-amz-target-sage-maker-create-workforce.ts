import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateWorkforceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateWorkforceHandler = app.openapi(
  postXAmzTargetSageMakerCreateWorkforceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

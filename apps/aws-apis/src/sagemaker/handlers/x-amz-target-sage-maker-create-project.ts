import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateProjectHandler = app.openapi(
  postXAmzTargetSageMakerCreateProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

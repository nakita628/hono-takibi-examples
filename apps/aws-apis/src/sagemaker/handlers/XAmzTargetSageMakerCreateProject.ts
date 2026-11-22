import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateProjectHandler = app.openapi(
  postXAmzTargetSageMakerCreateProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

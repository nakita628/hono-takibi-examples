import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateProjectHandler = app.openapi(
  postXAmzTargetSageMakerUpdateProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

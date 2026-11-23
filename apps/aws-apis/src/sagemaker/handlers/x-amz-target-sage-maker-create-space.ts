import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateSpaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateSpaceHandler = app.openapi(
  postXAmzTargetSageMakerCreateSpaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

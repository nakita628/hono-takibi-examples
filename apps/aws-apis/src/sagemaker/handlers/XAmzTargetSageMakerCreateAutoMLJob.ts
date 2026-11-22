import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateAutoMLJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateAutoMLJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateAutoMLJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

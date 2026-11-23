import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateAutoMLJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateAutoMlJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateAutoMLJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

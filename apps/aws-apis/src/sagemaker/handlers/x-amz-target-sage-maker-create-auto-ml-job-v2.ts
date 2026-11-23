import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateAutoMLJobV2Route } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateAutoMlJobV2Handler = app.openapi(
  postXAmzTargetSageMakerCreateAutoMLJobV2Route,
  (c) => {
    throw new Error('Not implemented')
  },
)

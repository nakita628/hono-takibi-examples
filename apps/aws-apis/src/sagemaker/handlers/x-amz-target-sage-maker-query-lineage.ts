import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerQueryLineageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerQueryLineageHandler = app.openapi(
  postXAmzTargetSageMakerQueryLineageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

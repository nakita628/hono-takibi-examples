import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeCodeRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeCodeRepositoryHandler = app.openapi(
  postXAmzTargetSageMakerDescribeCodeRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

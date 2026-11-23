import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeAutoMLJobV2Route } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeAutoMlJobV2Handler = app.openapi(
  postXAmzTargetSageMakerDescribeAutoMLJobV2Route,
  (c) => {
    throw new Error('Not implemented')
  },
)

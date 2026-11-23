import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeHumanTaskUiRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeHumanTaskUiHandler = app.openapi(
  postXAmzTargetSageMakerDescribeHumanTaskUiRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

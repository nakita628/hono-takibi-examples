import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeHumanTaskUiRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeHumanTaskUiHandler = app.openapi(
  postXAmzTargetSageMakerDescribeHumanTaskUiRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

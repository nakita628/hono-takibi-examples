import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeContinuousBackupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810DescribeContinuousBackupsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeContinuousBackupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

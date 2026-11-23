import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceDescribeBackupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceDescribeBackupsHandler = app.openapi(
  postXAmzTargetBaldrApiServiceDescribeBackupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

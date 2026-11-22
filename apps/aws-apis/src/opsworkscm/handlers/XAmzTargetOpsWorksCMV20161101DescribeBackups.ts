import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101DescribeBackupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101DescribeBackupsHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101DescribeBackupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

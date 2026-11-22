import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

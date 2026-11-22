import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeRaidArraysRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DescribeRaidArraysHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeRaidArraysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

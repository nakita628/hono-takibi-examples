import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901PutMetricPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMediaStore20170901PutMetricPolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901PutMetricPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

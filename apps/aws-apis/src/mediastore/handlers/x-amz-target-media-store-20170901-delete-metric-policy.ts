import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901DeleteMetricPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901DeleteMetricPolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901DeleteMetricPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

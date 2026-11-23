import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901GetMetricPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMediaStore20170901GetMetricPolicyHandler = app.openapi(
  postXAmzTargetMediaStore20170901GetMetricPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

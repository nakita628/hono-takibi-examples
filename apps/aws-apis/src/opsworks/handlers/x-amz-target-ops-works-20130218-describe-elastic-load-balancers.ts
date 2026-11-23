import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeElasticLoadBalancersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribeElasticLoadBalancersHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeElasticLoadBalancersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DescribeElasticIpsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DescribeElasticIpsHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DescribeElasticIpsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

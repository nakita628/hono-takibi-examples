import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UpdateElasticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218UpdateElasticIpHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UpdateElasticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

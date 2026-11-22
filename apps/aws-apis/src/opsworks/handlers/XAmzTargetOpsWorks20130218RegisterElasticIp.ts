import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218RegisterElasticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218RegisterElasticIpHandler = app.openapi(
  postXAmzTargetOpsWorks20130218RegisterElasticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

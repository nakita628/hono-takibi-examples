import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeregisterElasticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DeregisterElasticIpHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeregisterElasticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

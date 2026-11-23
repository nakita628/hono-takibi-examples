import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218AssociateElasticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218AssociateElasticIpHandler = app.openapi(
  postXAmzTargetOpsWorks20130218AssociateElasticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

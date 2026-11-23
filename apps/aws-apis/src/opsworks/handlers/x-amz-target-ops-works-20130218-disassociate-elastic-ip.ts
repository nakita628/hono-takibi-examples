import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DisassociateElasticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DisassociateElasticIpHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DisassociateElasticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

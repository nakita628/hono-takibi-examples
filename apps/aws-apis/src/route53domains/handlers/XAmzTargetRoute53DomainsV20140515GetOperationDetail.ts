import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515GetOperationDetailRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515GetOperationDetailHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515GetOperationDetailRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

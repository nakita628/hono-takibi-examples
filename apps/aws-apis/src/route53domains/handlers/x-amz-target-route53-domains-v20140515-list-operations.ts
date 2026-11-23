import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515ListOperationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515ListOperationsHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515ListOperationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

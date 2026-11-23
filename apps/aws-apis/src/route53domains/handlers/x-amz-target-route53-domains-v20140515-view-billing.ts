import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515ViewBillingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515ViewBillingHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515ViewBillingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515DisableDomainTransferLockHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515EnableDomainTransferLockHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515TransferDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515TransferDomainHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515TransferDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

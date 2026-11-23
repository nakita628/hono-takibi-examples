import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainHandler =
  app.openapi(
    postXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

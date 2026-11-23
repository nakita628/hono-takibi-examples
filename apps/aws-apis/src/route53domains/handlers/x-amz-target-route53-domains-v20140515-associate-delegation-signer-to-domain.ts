import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainHandler =
  app.openapi(postXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainRoute, (c) => {
    throw new Error('Not implemented')
  })

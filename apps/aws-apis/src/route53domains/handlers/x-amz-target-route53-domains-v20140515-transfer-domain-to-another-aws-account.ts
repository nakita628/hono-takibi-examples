import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountHandler =
  app.openapi(postXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountRoute, (c) => {
    throw new Error('Not implemented')
  })

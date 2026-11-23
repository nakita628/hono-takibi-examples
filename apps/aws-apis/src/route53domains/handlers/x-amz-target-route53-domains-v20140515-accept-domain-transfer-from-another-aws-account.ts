import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountHandler =
  app.openapi(
    postXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

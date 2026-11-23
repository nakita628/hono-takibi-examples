import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountHandler =
  app.openapi(
    postXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

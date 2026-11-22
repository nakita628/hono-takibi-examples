import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountHandler =
  app.openapi(
    postXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

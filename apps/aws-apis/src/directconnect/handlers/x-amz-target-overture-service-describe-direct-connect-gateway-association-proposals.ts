import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsHandler =
  app.openapi(
    postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsHandler =
  app.openapi(
    postXAmzTargetOvertureServiceDescribeDirectConnectGatewayAssociationProposalsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

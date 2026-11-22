import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalHandler =
  app.openapi(
    postXAmzTargetOvertureServiceCreateDirectConnectGatewayAssociationProposalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

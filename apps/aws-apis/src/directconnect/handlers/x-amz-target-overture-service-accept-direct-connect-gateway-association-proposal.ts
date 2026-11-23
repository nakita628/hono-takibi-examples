import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalHandler =
  app.openapi(
    postXAmzTargetOvertureServiceAcceptDirectConnectGatewayAssociationProposalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

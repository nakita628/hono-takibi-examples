import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalHandler =
  app.openapi(
    postXAmzTargetOvertureServiceDeleteDirectConnectGatewayAssociationProposalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

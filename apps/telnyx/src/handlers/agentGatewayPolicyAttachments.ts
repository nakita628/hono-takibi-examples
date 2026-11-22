import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentGatewaysInstanceIdPolicyAttachmentsAttachmentIdRoute,
  getAgentGatewaysInstanceIdPolicyAttachmentsRoute,
  postAgentGatewaysInstanceIdPolicyAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentGatewayPolicyAttachmentsHandler = app
  .openapi(getAgentGatewaysInstanceIdPolicyAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentGatewaysInstanceIdPolicyAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentGatewaysInstanceIdPolicyAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })

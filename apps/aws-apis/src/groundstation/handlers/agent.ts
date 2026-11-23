import { OpenAPIHono } from '@hono/zod-openapi'
import { getAgentAgentIdConfigurationRoute, postAgentRoute, putAgentAgentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const agentHandler = app
  .openapi(getAgentAgentIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAgentAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })

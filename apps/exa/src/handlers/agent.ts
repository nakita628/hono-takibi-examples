import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentRunsIdRoute,
  getAgentRunsIdEventsRoute,
  getAgentRunsIdRoute,
  getAgentRunsRoute,
  postAgentRunsIdCancelRoute,
  postAgentRunsIdStopRoute,
  postAgentRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentHandler = app
  .openapi(postAgentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentRunsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })

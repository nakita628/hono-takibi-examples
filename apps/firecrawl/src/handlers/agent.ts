import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentJobIdRoute,
  getAgentJobIdRoute,
  getAgentJobIdSnapshotsSnapshotIdRoute,
  getAgentJobIdTraceRoute,
  getAgentRoute,
  postAgentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentHandler = app
  .openapi(getAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentJobIdTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentJobIdSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })

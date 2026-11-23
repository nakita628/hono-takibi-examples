import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOperatorRaftPeerRoute,
  getOperatorAutopilotConfigurationRoute,
  getOperatorAutopilotHealthRoute,
  getOperatorRaftConfigurationRoute,
  getOperatorSchedulerConfigurationRoute,
  postOperatorSchedulerConfigurationRoute,
  putOperatorAutopilotConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operatorHandler = app
  .openapi(getOperatorAutopilotConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOperatorAutopilotConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperatorAutopilotHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperatorRaftConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOperatorRaftPeerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperatorSchedulerConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperatorSchedulerConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })

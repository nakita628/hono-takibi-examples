import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlatformApiV1AgentBotsIdRoute,
  getPlatformApiV1AgentBotsIdRoute,
  getPlatformApiV1AgentBotsRoute,
  patchPlatformApiV1AgentBotsIdRoute,
  postPlatformApiV1AgentBotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentBotsHandler = app
  .openapi(getPlatformApiV1AgentBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformApiV1AgentBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1AgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlatformApiV1AgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlatformApiV1AgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

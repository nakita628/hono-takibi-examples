import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgCoapGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgCoapGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgCoapGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgCoapGetTraceRoute,
  getMimicProtocolMsgCoapGetStatsHdrRoute,
  putMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const coapHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgCoapGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgCoapGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgCoapGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgCoapGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgCoapGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

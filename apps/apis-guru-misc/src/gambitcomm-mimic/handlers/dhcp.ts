import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgDhcpGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgDhcpGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgDhcpGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgDhcpParamsRoute,
  getMimicProtocolMsgDhcpGetStatsHdrRoute,
  putMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dhcpHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgDhcpParamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgDhcpGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

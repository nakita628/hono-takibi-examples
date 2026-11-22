import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgIpmiGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgIpmiGetAttrRoute,
  getMimicAgentAgentNumProtocolMsgIpmiGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgIpmiGetTraceRoute,
  getMimicProtocolMsgIpmiGetStatsHdrRoute,
  putMimicAgentAgentNumProtocolMsgIpmiSetAttrValueRoute,
  putMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipmiHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgIpmiGetAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgIpmiSetAttrValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgIpmiGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgSyslogGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgSyslogGetAttrRoute,
  getMimicAgentAgentNumProtocolMsgSyslogGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgSyslogGetTraceRoute,
  getMimicProtocolMsgSyslogGetStatsHdrRoute,
  postMimicAgentAgentNumProtocolMsgSyslogSendPriRoute,
  putMimicAgentAgentNumProtocolMsgSyslogSetAttrValueRoute,
  putMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syslogHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSyslogGetAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgSyslogSendPriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSyslogSetAttrValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgSyslogGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

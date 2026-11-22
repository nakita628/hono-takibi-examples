import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortRoute,
  getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListRoute,
  getMimicProtocolMsgSnmptcpGetStatsHdrRoute,
  putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snmptcpHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgSnmptcpGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

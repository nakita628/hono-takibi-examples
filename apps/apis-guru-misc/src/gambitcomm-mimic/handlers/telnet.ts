import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgTelnetGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgTelnetGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgTelnetGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortRoute,
  getMimicAgentAgentNumProtocolMsgTelnetIpaliasListRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetStateRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbRoute,
  getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersRoute,
  getMimicProtocolMsgTelnetGetStatsHdrRoute,
  putMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordRoute,
  putMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandRoute,
  putMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameRoute,
  putMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const telnetHandler = app
  .openapi(
    putMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetIpaliasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgTelnetGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

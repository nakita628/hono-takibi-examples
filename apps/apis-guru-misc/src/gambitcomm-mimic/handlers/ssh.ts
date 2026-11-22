import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgSshGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgSshGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSshGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgSshGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortRoute,
  getMimicAgentAgentNumProtocolMsgSshIpaliasListRoute,
  getMimicProtocolMsgSshGetStatsHdrRoute,
  putMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortRoute,
  putMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sshHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgSshGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSshIpaliasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgSshGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortRoute,
  getMimicAgentAgentNumProtocolMsgProxyGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgProxyGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgProxyGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgProxyGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortRoute,
  getMimicAgentAgentNumProtocolMsgProxyPortListRoute,
  getMimicProtocolMsgProxyGetStatsHdrRoute,
  postMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortRoute,
  putMimicAgentAgentNumProtocolMsgProxyPortStartPortRoute,
  putMimicAgentAgentNumProtocolMsgProxyPortStopPortRoute,
  putMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const proxyHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgProxyGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgProxyPortListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgProxyPortStartPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgProxyPortStopPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgProxyGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

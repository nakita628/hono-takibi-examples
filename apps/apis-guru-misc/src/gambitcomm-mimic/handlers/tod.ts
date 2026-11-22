import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgTodGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgTodGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgTodGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesRoute,
  getMimicAgentAgentNumProtocolMsgTodGetTraceRoute,
  getMimicProtocolMsgTodGetStatsHdrRoute,
  putMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const todHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgTodGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTodGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTodGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTodGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgTodGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

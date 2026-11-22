import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgSflowGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgSflowGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSflowGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgSflowGetTraceRoute,
  getMimicProtocolMsgSflowGetStatsHdrRoute,
  putMimicAgentAgentNumProtocolMsgSflowHaltRoute,
  putMimicAgentAgentNumProtocolMsgSflowReloadRoute,
  putMimicAgentAgentNumProtocolMsgSflowResumeRoute,
  putMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sflowHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgSflowGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSflowGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSflowGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSflowGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowHaltRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgSflowGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

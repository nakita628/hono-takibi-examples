import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgNetflowFlowListRoute,
  getMimicAgentAgentNumProtocolMsgNetflowGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgNetflowGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgNetflowGetTraceRoute,
  getMimicProtocolMsgNetflowGetStatsHdrRoute,
  putMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalRoute,
  putMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueRoute,
  putMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalRoute,
  putMimicAgentAgentNumProtocolMsgNetflowHaltRoute,
  putMimicAgentAgentNumProtocolMsgNetflowReloadRoute,
  putMimicAgentAgentNumProtocolMsgNetflowResumeRoute,
  putMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPRoute,
  putMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameRoute,
  putMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const netflowHandler = app
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowFlowListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgNetflowGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowHaltRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgNetflowGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

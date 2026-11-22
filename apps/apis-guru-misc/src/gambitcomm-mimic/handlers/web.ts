import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMimicAgentAgentNumProtocolMsgWebPortRemovePortRoute,
  getMimicAgentAgentNumProtocolMsgWebGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgWebGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgWebGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgWebGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgWebPortExistsPortRoute,
  getMimicProtocolMsgWebGetStatsHdrRoute,
  postMimicAgentAgentNumProtocolMsgWebPortAddPortRoute,
  putMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionRoute,
  putMimicAgentAgentNumProtocolMsgWebPortStartPortRoute,
  putMimicAgentAgentNumProtocolMsgWebPortStopPortRoute,
  putMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgWebGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgWebGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgWebGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgWebGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgWebPortAddPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgWebPortExistsPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgWebPortRemovePortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebPortStartPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebPortStopPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgWebGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMimicAgentAgentNumProtocolMsgTftpGetArgsRoute,
  getMimicAgentAgentNumProtocolMsgTftpGetConfigRoute,
  getMimicAgentAgentNumProtocolMsgTftpGetStatisticsRoute,
  getMimicAgentAgentNumProtocolMsgTftpGetTraceRoute,
  getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterRoute,
  getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusRoute,
  getMimicProtocolMsgTftpGetStatsHdrRoute,
  postMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileRoute,
  postMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileRoute,
  putMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueRoute,
  putMimicAgentAgentNumProtocolMsgTftpSessionIDStartRoute,
  putMimicAgentAgentNumProtocolMsgTftpSessionIDStopRoute,
  putMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueRoute,
  putMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tftpHandler = app
  .openapi(getMimicAgentAgentNumProtocolMsgTftpGetArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpGetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpGetStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpGetTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSessionIDStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgTftpSessionIDStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicProtocolMsgTftpGetStatsHdrRoute, (c) => {
    throw new Error('Not implemented')
  })

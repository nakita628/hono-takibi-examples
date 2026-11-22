import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearRoute,
  deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3AccessListRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3GroupListRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3UserListRoute,
  getMimicAgentAgentNumProtocolMsgSnmpv3ViewListRoute,
  postMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewRoute,
  postMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameRoute,
  postMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyRoute,
  postMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameRoute,
  putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snmPv3Handler = app
  .openapi(
    postMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3AccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3GroupListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3UserListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumProtocolMsgSnmpv3ViewListRoute, (c) => {
    throw new Error('Not implemented')
  })

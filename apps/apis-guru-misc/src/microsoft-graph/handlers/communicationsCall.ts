import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  deleteCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  deleteCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  deleteCommunicationsCallsCallIdRoute,
  getCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  getCommunicationsCallsCallIdAudioRoutingGroupsRoute,
  getCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  getCommunicationsCallsCallIdContentSharingSessionsRoute,
  getCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  getCommunicationsCallsCallIdOperationsRoute,
  getCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  getCommunicationsCallsCallIdParticipantsRoute,
  getCommunicationsCallsCallIdRoute,
  getCommunicationsCallsRoute,
  patchCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  patchCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  patchCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  patchCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  patchCommunicationsCallsCallIdRoute,
  postCommunicationsCallsCallIdAudioRoutingGroupsRoute,
  postCommunicationsCallsCallIdContentSharingSessionsRoute,
  postCommunicationsCallsCallIdOperationsRoute,
  postCommunicationsCallsCallIdParticipantsRoute,
  postCommunicationsCallsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationsCallHandler = app
  .openapi(getCommunicationsCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdAudioRoutingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdAudioRoutingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdContentSharingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdContentSharingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsCallsCallIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallsCallIdOperationsCommsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdOperationsCommsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallsCallIdOperationsCommsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallsCallIdParticipantsParticipantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdParticipantsParticipantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallsCallIdParticipantsParticipantIdRoute, (c) => {
    throw new Error('Not implemented')
  })

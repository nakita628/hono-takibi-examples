import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DeletedTicketsDestroyManyRoute,
  deleteApiV2DeletedTicketsTicketIdRoute,
  deleteApiV2TicketsDestroyManyRoute,
  deleteApiV2TicketsTicketIdRoute,
  getApiV2DeletedTicketsRoute,
  getApiV2OrganizationsOrganizationIdTicketsCountRoute,
  getApiV2OrganizationsOrganizationIdTicketsRoute,
  getApiV2ProblemsRoute,
  getApiV2TicketsAutocompleteRoute,
  getApiV2TicketsCountRoute,
  getApiV2TicketsMessagingConversationsConversationIdTicketRoute,
  getApiV2TicketsRecentRoute,
  getApiV2TicketsRoute,
  getApiV2TicketsShowManyRoute,
  getApiV2TicketsTicketIdCollaboratorsRoute,
  getApiV2TicketsTicketIdEmailCcsRoute,
  getApiV2TicketsTicketIdFollowersRoute,
  getApiV2TicketsTicketIdIncidentsRoute,
  getApiV2TicketsTicketIdRelatedRoute,
  getApiV2TicketsTicketIdRoute,
  getApiV2UsersUserIdTicketsAssignedCountRoute,
  getApiV2UsersUserIdTicketsAssignedRoute,
  getApiV2UsersUserIdTicketsCcdCountRoute,
  getApiV2UsersUserIdTicketsCcdRoute,
  getApiV2UsersUserIdTicketsFollowedRoute,
  getApiV2UsersUserIdTicketsRequestedRoute,
  postApiV2ProblemsAutocompleteRoute,
  postApiV2TicketsCreateManyRoute,
  postApiV2TicketsRoute,
  postApiV2TicketsTicketIdMergeRoute,
  putApiV2DeletedTicketsRestoreManyRoute,
  putApiV2DeletedTicketsTicketIdRestoreRoute,
  putApiV2TicketsMarkManyAsSpamRoute,
  putApiV2TicketsTicketIdMarkAsSpamRoute,
  putApiV2TicketsTicketIdRoute,
  putApiV2TicketsUpdateManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketsHandler = app
  .openapi(getApiV2DeletedTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeletedTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DeletedTicketsTicketIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeletedTicketsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DeletedTicketsRestoreManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdTicketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProblemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProblemsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdEmailCcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdMarkAsSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsMarkManyAsSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsMessagingConversationsConversationIdTicketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsAssignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsAssignedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsCcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsCcdCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsFollowedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsRequestedRoute, (c) => {
    throw new Error('Not implemented')
  })

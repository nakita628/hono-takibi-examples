import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdCollaboratorsStoryCollaboratorUseridRoute,
  deleteIdFileOoxmlAutomationIdRoute,
  deleteIdRoute,
  getIdAnalyticsRoute,
  getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeRoute,
  getIdCollaboratorsRoute,
  getIdCollaboratorsStoryCollaboratorUseridRoute,
  getIdEventsRoute,
  getIdFileOoxmlAutomationIdRoute,
  getIdMessagesRoute,
  getIdOutlineRoute,
  getIdPublicIndexRoute,
  getIdRevealRoute,
  getIdRoute,
  getIdSessionsRoute,
  getIdStatusRoute,
  postIdCollaboratorsInactiveRoute,
  postIdCollaboratorsRoute,
  postIdEventsRoute,
  postIdFileRoute,
  postIdMessagesRoute,
  postIdOutlineRoute,
  postIdSessionsRoute,
  putIdCollaboratorsStoryCollaboratorUseridRoute,
  putIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const idHandler = app
  .openapi(deleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdCollaboratorsInactiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdCollaboratorsStoryCollaboratorUseridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdCollaboratorsStoryCollaboratorUseridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIdCollaboratorsStoryCollaboratorUseridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdFileOoxmlAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdFileOoxmlAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdOutlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdOutlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdPublicIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

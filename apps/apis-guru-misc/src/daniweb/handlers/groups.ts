import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsIDMembershipsRoute,
  deleteGroupsMessagesIDRoute,
  getGroupsIDMembershipsRoute,
  getGroupsIDMessagesRoute,
  getGroupsIDRoute,
  getGroupsIDStatusesRoute,
  getGroupsMessagesIDMetadataCollectionsRoute,
  getGroupsMessagesIDMetadataRoute,
  getGroupsMessagesIDRoute,
  getGroupsRoute,
  getGroupsStatusesRoute,
  patchGroupsIDMembershipsRoute,
  patchGroupsIDRoute,
  postGroupsIDMembershipsRoute,
  postGroupsIDMessagesRoute,
  postGroupsIDSchedulesRoute,
  postGroupsMessagesIDMetadataRoute,
  postGroupsMessagesMetadataFiltersRoute,
  postGroupsRoute,
  postGroupsSchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsMessagesMetadataFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsMessagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsMessagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsMessagesIDMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsMessagesIDMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsMessagesIDMetadataCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsIDMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIDMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsIDMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsIDMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIDMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsIDMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsIDSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIDStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })

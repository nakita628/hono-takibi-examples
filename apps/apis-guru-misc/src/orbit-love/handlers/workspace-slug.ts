import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspaceSlugMembersMemberSlugActivitiesIdRoute,
  deleteWorkspaceSlugMembersMemberSlugIdentitiesRoute,
  deleteWorkspaceSlugMembersMemberSlugRoute,
  deleteWorkspaceSlugWebhooksIdRoute,
  getWorkspaceSlugActivitiesIdRoute,
  getWorkspaceSlugActivitiesRoute,
  getWorkspaceSlugActivityTypesRoute,
  getWorkspaceSlugMembersFindRoute,
  getWorkspaceSlugMembersMemberSlugActivitiesRoute,
  getWorkspaceSlugMembersMemberSlugNotesRoute,
  getWorkspaceSlugMembersMemberSlugRoute,
  getWorkspaceSlugMembersRoute,
  getWorkspaceSlugOrganizationsOrganizationIdActivitiesRoute,
  getWorkspaceSlugOrganizationsOrganizationIdMembersRoute,
  getWorkspaceSlugOrganizationsOrganizationIdRoute,
  getWorkspaceSlugOrganizationsRoute,
  getWorkspaceSlugReportsRoute,
  getWorkspaceSlugWebhooksIdRoute,
  getWorkspaceSlugWebhooksRoute,
  postWorkspaceSlugActivitiesRoute,
  postWorkspaceSlugMembersMemberSlugActivitiesRoute,
  postWorkspaceSlugMembersMemberSlugIdentitiesRoute,
  postWorkspaceSlugMembersMemberSlugNotesRoute,
  postWorkspaceSlugMembersRoute,
  postWorkspaceSlugWebhooksRoute,
  putWorkspaceSlugMembersMemberSlugActivitiesIdRoute,
  putWorkspaceSlugMembersMemberSlugNotesIdRoute,
  putWorkspaceSlugMembersMemberSlugRoute,
  putWorkspaceSlugOrganizationsOrganizationIdRoute,
  putWorkspaceSlugWebhooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspaceSlugHandler = app
  .openapi(getWorkspaceSlugActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugActivityTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugMembersFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspaceSlugMembersMemberSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugMembersMemberSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugMembersMemberSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugMembersMemberSlugActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugMembersMemberSlugActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspaceSlugMembersMemberSlugActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugMembersMemberSlugActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspaceSlugMembersMemberSlugIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugMembersMemberSlugIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugMembersMemberSlugNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugMembersMemberSlugNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugMembersMemberSlugNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugOrganizationsOrganizationIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugOrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspaceSlugWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })

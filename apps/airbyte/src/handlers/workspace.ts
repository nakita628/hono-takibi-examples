import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkspacesWorkspaceIdSkillsDocsRoute,
  postV1WorkspacesCreateIfNotExistRoute,
  postV1WorkspacesCreateRoute,
  postV1WorkspacesDeleteRoute,
  postV1WorkspacesGetAvailableDbtJobsRoute,
  postV1WorkspacesGetByConnectionIdRoute,
  postV1WorkspacesGetByConnectionIdWithTombstoneRoute,
  postV1WorkspacesGetBySlugRoute,
  postV1WorkspacesGetDataWorkerAvailabilityRoute,
  postV1WorkspacesGetOrganizationInfoRoute,
  postV1WorkspacesGetRoute,
  postV1WorkspacesGetUsageRoute,
  postV1WorkspacesListByOrganizationIdRoute,
  postV1WorkspacesListByUserIdRoute,
  postV1WorkspacesListPaginatedRoute,
  postV1WorkspacesTagFeedbackStatusAsDoneRoute,
  postV1WorkspacesUpdateNameRoute,
  postV1WorkspacesUpdateOrganizationRoute,
  postV1WorkspacesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspaceHandler = app
  .openapi(postV1WorkspacesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesCreateIfNotExistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesListPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesListByOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesListByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetAvailableDbtJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetBySlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetByConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetByConnectionIdWithTombstoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetOrganizationInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetDataWorkerAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesTagFeedbackStatusAsDoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkspacesWorkspaceIdSkillsDocsRoute, (c) => {
    throw new Error('Not implemented')
  })

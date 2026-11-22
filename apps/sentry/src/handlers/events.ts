import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugIssuesIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute,
  getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexRoute,
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexRoute,
  getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute,
  postOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute,
  putOrganizationsOrganizationIdOrSlugIssuesIndexRoute,
  putOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

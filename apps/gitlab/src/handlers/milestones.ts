import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdMilestonesMilestoneIdRoute,
  deleteApiV4ProjectsIdMilestonesMilestoneIdRoute,
  getApiV4GroupsIdMilestonesMilestoneIdBurndownEventsRoute,
  getApiV4GroupsIdMilestonesMilestoneIdIssuesRoute,
  getApiV4GroupsIdMilestonesMilestoneIdMergeRequestsRoute,
  getApiV4GroupsIdMilestonesMilestoneIdRoute,
  getApiV4GroupsIdMilestonesRoute,
  getApiV4ProjectsIdMilestonesMilestoneIdBurndownEventsRoute,
  getApiV4ProjectsIdMilestonesMilestoneIdIssuesRoute,
  getApiV4ProjectsIdMilestonesMilestoneIdMergeRequestsRoute,
  getApiV4ProjectsIdMilestonesMilestoneIdRoute,
  getApiV4ProjectsIdMilestonesRoute,
  postApiV4GroupsIdMilestonesRoute,
  postApiV4ProjectsIdMilestonesMilestoneIdPromoteRoute,
  postApiV4ProjectsIdMilestonesRoute,
  putApiV4GroupsIdMilestonesMilestoneIdRoute,
  putApiV4ProjectsIdMilestonesMilestoneIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const milestonesHandler = app
  .openapi(getApiV4ProjectsIdMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMilestonesMilestoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMilestonesMilestoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdMilestonesMilestoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMilestonesMilestoneIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMilestonesMilestoneIdMergeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMilestonesMilestoneIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMilestonesMilestoneIdBurndownEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMilestonesMilestoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdMilestonesMilestoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdMilestonesMilestoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMilestonesMilestoneIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMilestonesMilestoneIdMergeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMilestonesMilestoneIdBurndownEventsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIssueTrackersIssueTrackerNameRoute,
  getIssueTrackersIssueTrackerNameIssuesIssueNameRoute,
  getIssueTrackersIssueTrackerNameRoute,
  getIssueTrackersRoute,
  postIssueTrackersRoute,
  putIssueTrackersIssueTrackerNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueTrackersHandler = app
  .openapi(getIssueTrackersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssueTrackersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIssueTrackersIssueTrackerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTrackersIssueTrackerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIssueTrackersIssueTrackerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTrackersIssueTrackerNameIssuesIssueNameRoute, (c) => {
    throw new Error('Not implemented')
  })

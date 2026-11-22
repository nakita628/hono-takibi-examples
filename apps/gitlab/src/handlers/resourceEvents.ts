import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4GroupsIdEpicsEventableIdResourceLabelEventsEventIdRoute,
  getApiV4GroupsIdEpicsEventableIdResourceLabelEventsRoute,
  getApiV4GroupsIdEpicsEventableIdResourceStateEventsEventIdRoute,
  getApiV4GroupsIdEpicsEventableIdResourceStateEventsRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceIterationEventsEventIdRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceIterationEventsRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceLabelEventsEventIdRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceLabelEventsRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceMilestoneEventsEventIdRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceMilestoneEventsRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceStateEventsEventIdRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceStateEventsRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceWeightEventsEventIdRoute,
  getApiV4ProjectsIdIssuesEventableIdResourceWeightEventsRoute,
  getApiV4ProjectsIdMergeRequestsEventableIdResourceLabelEventsEventIdRoute,
  getApiV4ProjectsIdMergeRequestsEventableIdResourceLabelEventsRoute,
  getApiV4ProjectsIdMergeRequestsEventableIdResourceMilestoneEventsEventIdRoute,
  getApiV4ProjectsIdMergeRequestsEventableIdResourceMilestoneEventsRoute,
  getApiV4ProjectsIdMergeRequestsEventableIdResourceStateEventsEventIdRoute,
  getApiV4ProjectsIdMergeRequestsEventableIdResourceStateEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceEventsHandler = app
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceIterationEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceIterationEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceWeightEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceWeightEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceStateEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceStateEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsEventableIdResourceStateEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsEventableIdResourceStateEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEventableIdResourceStateEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEventableIdResourceStateEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceLabelEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceLabelEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsEventableIdResourceLabelEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsEventableIdResourceLabelEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEventableIdResourceLabelEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEventableIdResourceLabelEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceMilestoneEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIssuesEventableIdResourceMilestoneEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsEventableIdResourceMilestoneEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsEventableIdResourceMilestoneEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })

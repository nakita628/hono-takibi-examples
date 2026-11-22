import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiJobsHardwareRoute,
  getApiJobsNamespaceCountRoute,
  getApiJobsNamespaceJobIdRoute,
  getApiJobsNamespaceRoute,
  getApiScheduledJobsNamespaceJobIdRoute,
  getApiScheduledJobsNamespaceRoute,
  postApiJobsNamespaceAuthCheckPermsRoute,
  postApiJobsNamespaceJobIdAuthCheckPermsRoute,
  postApiJobsNamespaceJobIdCancelRoute,
  postApiJobsNamespaceJobIdDuplicateRoute,
  postApiJobsNamespaceRoute,
  postApiScheduledJobsNamespaceJobIdRunRoute,
  postApiScheduledJobsNamespaceJobIdScheduleRoute,
  postApiScheduledJobsNamespaceRoute,
  putApiJobsNamespaceJobIdExposeRoute,
  putApiJobsNamespaceJobIdLabelsRoute,
  putApiScheduledJobsNamespaceJobIdLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(postApiJobsNamespaceAuthCheckPermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsNamespaceJobIdAuthCheckPermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsHardwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsNamespaceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsNamespaceJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsNamespaceJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsNamespaceJobIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiJobsNamespaceJobIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiJobsNamespaceJobIdExposeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScheduledJobsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScheduledJobsNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScheduledJobsNamespaceJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScheduledJobsNamespaceJobIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScheduledJobsNamespaceJobIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiScheduledJobsNamespaceJobIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })

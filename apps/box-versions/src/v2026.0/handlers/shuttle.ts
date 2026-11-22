import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShuttleJobSchedulesShuttleJobScheduleIdRoute,
  deleteShuttleJobsShuttleJobIdRoute,
  deleteShuttlePathMappingsShuttlePathMappingIdRoute,
  deleteShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
  deleteShuttleSystemsShuttleSystemIdRoute,
  getShuttleDiscoveredSubjectsRoute,
  getShuttleJobSchedulesRoute,
  getShuttleJobSchedulesShuttleJobScheduleIdRoute,
  getShuttleJobsRoute,
  getShuttleJobsShuttleJobIdRoute,
  getShuttleMappingErrorsRoute,
  getShuttlePathEntriesRoute,
  getShuttlePathMappingsRoute,
  getShuttlePathMappingsShuttlePathMappingIdRoute,
  getShuttleReportsRoute,
  getShuttleReportsShuttleReportIdRoute,
  getShuttleRunsRoute,
  getShuttleRunsShuttleRunIdRoute,
  getShuttleSubjectMappingsRoute,
  getShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
  getShuttleSystemsRoute,
  getShuttleSystemsShuttleSystemIdRoute,
  postShuttleJobSchedulesRoute,
  postShuttleJobsRoute,
  postShuttleJobsShuttleJobIdPrepareMigrationRoute,
  postShuttleJobsShuttleJobIdStartRoute,
  postShuttleJobsShuttleJobIdStopRoute,
  postShuttlePathMappingImportsRoute,
  postShuttlePathMappingsRoute,
  postShuttleReportsRoute,
  postShuttleSubjectMappingImportsRoute,
  postShuttleSubjectMappingsRoute,
  postShuttleSystemsRoute,
  postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRoute,
  putShuttleJobSchedulesShuttleJobScheduleIdRoute,
  putShuttleJobsShuttleJobIdRoute,
  putShuttlePathMappingsShuttlePathMappingIdRoute,
  putShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
  putShuttleSystemsShuttleSystemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shuttleHandler = app
  .openapi(getShuttleSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleSystemsShuttleSystemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttleSystemsShuttleSystemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttleSystemsShuttleSystemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleJobsShuttleJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttleJobsShuttleJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttleJobsShuttleJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobsShuttleJobIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobsShuttleJobIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobsShuttleJobIdPrepareMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleRunsShuttleRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleJobSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleJobSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleJobSchedulesShuttleJobScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttleJobSchedulesShuttleJobScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttleJobSchedulesShuttleJobScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttlePathMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttlePathMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttlePathMappingsShuttlePathMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttlePathMappingsShuttlePathMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttlePathMappingsShuttlePathMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttlePathMappingImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleSubjectMappingImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleSubjectMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleSubjectMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleSubjectMappingsShuttleSubjectMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttleSubjectMappingsShuttleSubjectMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttleSubjectMappingsShuttleSubjectMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleDiscoveredSubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttlePathEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleMappingErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleReportsShuttleReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobsBatchJobIdRoute,
  deleteJobsCisJobIdRoute,
  deleteJobsDpsJobIdRoute,
  deleteJobsPayRunsJobIdRoute,
  deleteJobsRtiJobIdRoute,
  deleteJobsThirdPartyJobIdRoute,
  getJobsBatchJobIdInfoRoute,
  getJobsBatchJobIdProgressRoute,
  getJobsBatchJobIdStatusRoute,
  getJobsBatchRoute,
  getJobsCisJobIdInfoRoute,
  getJobsCisJobIdProgressRoute,
  getJobsCisJobIdStatusRoute,
  getJobsCisRoute,
  getJobsDpsJobIdInfoRoute,
  getJobsDpsJobIdProgressRoute,
  getJobsDpsJobIdStatusRoute,
  getJobsDpsRoute,
  getJobsEmployerEmployerIdRoute,
  getJobsPayRunsJobIdInfoRoute,
  getJobsPayRunsJobIdProgressRoute,
  getJobsPayRunsJobIdStatusRoute,
  getJobsPayRunsRoute,
  getJobsRtiJobIdInfoRoute,
  getJobsRtiJobIdProgressRoute,
  getJobsRtiJobIdStatusRoute,
  getJobsRtiRoute,
  getJobsThirdPartyJobIdInfoRoute,
  getJobsThirdPartyJobIdProgressRoute,
  getJobsThirdPartyJobIdStatusRoute,
  getJobsThirdPartyRoute,
  postJobsBatchRoute,
  postJobsCisRoute,
  postJobsDpsRoute,
  postJobsPayRunsRoute,
  postJobsRtiRoute,
  postJobsThirdPartyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getJobsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobsBatchJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsBatchJobIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsBatchJobIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsBatchJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsCisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsCisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobsCisJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsCisJobIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsCisJobIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsCisJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsDpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsDpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobsDpsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsDpsJobIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsDpsJobIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsDpsJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsEmployerEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobsPayRunsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsPayRunsJobIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsPayRunsJobIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsPayRunsJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsRtiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsRtiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobsRtiJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsRtiJobIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsRtiJobIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsRtiJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsThirdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobsThirdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJobsThirdPartyJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsThirdPartyJobIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsThirdPartyJobIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsThirdPartyJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

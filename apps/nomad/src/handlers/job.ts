import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobJobNameRoute,
  getJobJobNameAllocationsRoute,
  getJobJobNameDeploymentRoute,
  getJobJobNameDeploymentsRoute,
  getJobJobNameEvaluationsRoute,
  getJobJobNameRoute,
  getJobJobNameScaleRoute,
  getJobJobNameSummaryRoute,
  getJobJobNameVersionsRoute,
  postJobJobNameDispatchRoute,
  postJobJobNameEvaluateRoute,
  postJobJobNamePeriodicForceRoute,
  postJobJobNamePlanRoute,
  postJobJobNameRevertRoute,
  postJobJobNameRoute,
  postJobJobNameScaleRoute,
  postJobJobNameStableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobHandler = app
  .openapi(deleteJobJobNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobJobNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobJobNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobJobNameAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobJobNameDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobJobNameDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobJobNameDispatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobJobNameEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobJobNameEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobJobNamePeriodicForceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobJobNamePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobJobNameRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobJobNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobJobNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobJobNameStableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobJobNameSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobJobNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1RampSchedulesIdRoute,
  getV1RampSchedulesIdRoute,
  getV1RampSchedulesIdStatusRoute,
  getV1RampSchedulesRoute,
  postV1RampSchedulesActionsPauseRoute,
  postV1RampSchedulesActionsRollbackRoute,
  postV1RampSchedulesIdActionsAddTargetRoute,
  postV1RampSchedulesIdActionsAdvanceRoute,
  postV1RampSchedulesIdActionsApproveStepRoute,
  postV1RampSchedulesIdActionsCompleteRoute,
  postV1RampSchedulesIdActionsEjectTargetRoute,
  postV1RampSchedulesIdActionsJumpRoute,
  postV1RampSchedulesIdActionsPauseRoute,
  postV1RampSchedulesIdActionsRefreshMonitoringRoute,
  postV1RampSchedulesIdActionsRestartRoute,
  postV1RampSchedulesIdActionsResumeRoute,
  postV1RampSchedulesIdActionsRetryRoute,
  postV1RampSchedulesIdActionsRollbackRoute,
  postV1RampSchedulesIdActionsSetAutoUpdateRoute,
  postV1RampSchedulesIdActionsSetMonitoringModeRoute,
  postV1RampSchedulesIdActionsStartRoute,
  postV1RampSchedulesRoute,
  putV1RampSchedulesIdLockdownRoute,
  putV1RampSchedulesIdMonitoringRoute,
  putV1RampSchedulesIdRoute,
  putV1RampSchedulesIdStepsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rampSchedulesHandler = app
  .openapi(getV1RampSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsJumpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsApproveStepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsAddTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsEjectTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampSchedulesIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsSetMonitoringModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsSetAutoUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampSchedulesIdMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampSchedulesIdLockdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampSchedulesIdStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsRefreshMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesActionsRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesActionsPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RampSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

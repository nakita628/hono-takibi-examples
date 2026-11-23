import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionIdRoute,
  getFineTuningCheckpointsFineTunedModelCheckpointPermissionsRoute,
  getFineTuningJobsFineTuningJobIdCheckpointsRoute,
  getFineTuningJobsFineTuningJobIdEventsRoute,
  getFineTuningJobsFineTuningJobIdRoute,
  getFineTuningJobsRoute,
  postFineTuningAlphaGradersRunRoute,
  postFineTuningAlphaGradersValidateRoute,
  postFineTuningCheckpointsFineTunedModelCheckpointPermissionsRoute,
  postFineTuningJobsFineTuningJobIdCancelRoute,
  postFineTuningJobsFineTuningJobIdPauseRoute,
  postFineTuningJobsFineTuningJobIdResumeRoute,
  postFineTuningJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fineTuningHandler = app
  .openapi(postFineTuningAlphaGradersRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTuningAlphaGradersValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTuningCheckpointsFineTunedModelCheckpointPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTuningCheckpointsFineTunedModelCheckpointPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFineTuningCheckpointsFineTunedModelCheckpointPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTuningJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTuningJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTuningJobsFineTuningJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTuningJobsFineTuningJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTuningJobsFineTuningJobIdCheckpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTuningJobsFineTuningJobIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTuningJobsFineTuningJobIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTuningJobsFineTuningJobIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })

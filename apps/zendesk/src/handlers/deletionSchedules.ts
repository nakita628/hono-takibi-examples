import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DeletionSchedulesDeletionScheduleIdRoute,
  getApiV2DeletionSchedulesDeletionScheduleIdRoute,
  getApiV2DeletionSchedulesRoute,
  postApiV2DeletionSchedulesRoute,
  putApiV2DeletionSchedulesDeletionScheduleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deletionSchedulesHandler = app
  .openapi(getApiV2DeletionSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DeletionSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletionSchedulesDeletionScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DeletionSchedulesDeletionScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeletionSchedulesDeletionScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })

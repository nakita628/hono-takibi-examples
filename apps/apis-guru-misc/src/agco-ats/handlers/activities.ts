import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ActivitiesActivityIDRoute,
  getApiV2ActivitiesActivityIDRoute,
  getApiV2ActivitiesRoute,
  postApiV2ActivitiesRoute,
  putApiV2ActivitiesActivityIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activitiesHandler = app
  .openapi(getApiV2ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ActivitiesActivityIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivitiesActivityIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ActivitiesActivityIDRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ActivitiesDownloadEntityActivityIdRoute,
  getApiV1ActivitiesRoute,
  postApiV1ActivitiesEntityRoute,
  postApiV1ActivitiesNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activitiesHandler = app
  .openapi(getApiV1ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ActivitiesDownloadEntityActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ActivitiesEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ActivitiesNotesRoute, (c) => {
    throw new Error('Not implemented')
  })

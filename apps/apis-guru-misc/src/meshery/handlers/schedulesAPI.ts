import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUserSchedulesIdRoute,
  getApiUserSchedulesIdRoute,
  getApiUserSchedulesRoute,
  postApiUserSchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesAPIHandler = app
  .openapi(getApiUserSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

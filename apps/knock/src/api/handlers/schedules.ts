import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SchedulesRoute,
  getV1ObjectsCollectionIdSchedulesRoute,
  getV1SchedulesRoute,
  getV1UsersUserIdSchedulesRoute,
  postV1SchedulesRoute,
  putV1SchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app
  .openapi(getV1UsersUserIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectsCollectionIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })

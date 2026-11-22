import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AudioIsolationHistoryHistoryItemIdRoute,
  getV1AudioIsolationHistoryRoute,
  postV1AudioIsolationRoute,
  postV1AudioIsolationStreamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audioIsolationHandler = app
  .openapi(postV1AudioIsolationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudioIsolationHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AudioIsolationHistoryHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudioIsolationStreamRoute, (c) => {
    throw new Error('Not implemented')
  })

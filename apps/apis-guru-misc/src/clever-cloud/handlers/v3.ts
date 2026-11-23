import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3LogsAppIdDrainsIdOrUrlRoute,
  getV3LogsAppIdDrainsIdOrUrlRoute,
  getV3LogsAppIdDrainsRoute,
  getV3LogsAppIdLogsChunkedRoute,
  getV3LogsAppIdLogsSocketRoute,
  getV3LogsAppIdRoute,
  postV3LogsAppIdDrainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3LogsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsAppIdDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3LogsAppIdDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3LogsAppIdDrainsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsAppIdDrainsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsAppIdLogsChunkedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsAppIdLogsSocketRoute, (c) => {
    throw new Error('Not implemented')
  })

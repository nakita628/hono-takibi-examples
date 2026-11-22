import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLogsStreamsOwnerOwnerIdRoute,
  deleteLogsStreamsResourceResourceIdRoute,
  getLogsRoute,
  getLogsStreamsOwnerOwnerIdRoute,
  getLogsStreamsResourceResourceIdRoute,
  getLogsStreamsResourceRoute,
  getLogsSubscribeRoute,
  getLogsValuesRoute,
  putLogsStreamsOwnerOwnerIdRoute,
  putLogsStreamsResourceResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsStreamsOwnerOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLogsStreamsOwnerOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLogsStreamsOwnerOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsStreamsResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsStreamsResourceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLogsStreamsResourceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLogsStreamsResourceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

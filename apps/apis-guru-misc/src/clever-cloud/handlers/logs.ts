import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLogsAppIdDrainsIdOrUrlRoute,
  getLogsAppIdDrainsIdOrUrlRoute,
  getLogsAppIdDrainsRoute,
  getLogsAppIdRoute,
  getLogsAppIdSseRoute,
  getLogsDrainsRoute,
  getLogsLogsChunkedAppIdRoute,
  getLogsLogsSocketAppIdRoute,
  postLogsAppIdDrainsRoute,
  putLogsDrainsDrainIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getLogsDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLogsDrainsDrainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsLogsChunkedAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsLogsSocketAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsAppIdDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLogsAppIdDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLogsAppIdDrainsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsAppIdDrainsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsAppIdSseRoute, (c) => {
    throw new Error('Not implemented')
  })

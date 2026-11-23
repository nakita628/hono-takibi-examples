import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLogsEventTimeAndIdRoute,
  getLogsGroupsGroupIdEventsRoute,
  getLogsRoute,
  getLogsSchemasRoute,
  getLogsTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsGroupsGroupIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsEventTimeAndIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdChangeLogsIdRoute,
  getUserprofilesProfileIdChangeLogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const changeLogsHandler = app
  .openapi(getUserprofilesProfileIdChangeLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdChangeLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

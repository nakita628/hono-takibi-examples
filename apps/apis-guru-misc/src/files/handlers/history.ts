import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHistoryFilesPathRoute,
  getHistoryFoldersPathRoute,
  getHistoryLoginRoute,
  getHistoryRoute,
  getHistoryUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app
  .openapi(getHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryFoldersPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })

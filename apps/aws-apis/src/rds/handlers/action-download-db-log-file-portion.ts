import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDownloadDBLogFilePortionRoute,
  postActionDownloadDBLogFilePortionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDownloadDbLogFilePortionHandler = app
  .openapi(getActionDownloadDBLogFilePortionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDownloadDBLogFilePortionRoute, (c) => {
    throw new Error('Not implemented')
  })

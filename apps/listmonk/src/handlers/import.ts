import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImportSubscribersRoute,
  getImportSubscribersLogsRoute,
  getImportSubscribersRoute,
  postImportSubscribersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importHandler = app
  .openapi(getImportSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImportSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportSubscribersLogsRoute, (c) => {
    throw new Error('Not implemented')
  })

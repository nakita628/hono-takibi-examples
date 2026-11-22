import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminBackupsFilenameRoute,
  getAdminBackupsJsonRoute,
  postAdminBackupsJsonRoute,
  putAdminBackupsFilenameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupsHandler = app
  .openapi(getAdminBackupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminBackupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminBackupsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminBackupsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })

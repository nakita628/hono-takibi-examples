import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsReportIdFilesFileIdRoute, getUserprofilesProfileIdFilesRoute } from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getReportsReportIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })

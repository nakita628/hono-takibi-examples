import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBackupsFilenameRoute,
  getBackupsFilenameRoute,
  getBackupsRoute,
  getBackupsSettingsRoute,
  patchBackupsSettingsRoute,
  postBackupsRoute,
  postBackupsUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupsHandler = app
  .openapi(getBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBackupsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })

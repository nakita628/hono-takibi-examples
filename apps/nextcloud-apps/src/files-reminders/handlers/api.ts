import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute,
  getOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute,
  putOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })

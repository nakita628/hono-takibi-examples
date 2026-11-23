import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute,
  getOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute,
  putOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute,
} from './routes'
import {
  deleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdRouteHandler,
  getOcsV2PhpAppsFilesRemindersApiVVersionFileIdRouteHandler,
  putOcsV2PhpAppsFilesRemindersApiVVersionFileIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute,
    getOcsV2PhpAppsFilesRemindersApiVVersionFileIdRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute,
    putOcsV2PhpAppsFilesRemindersApiVVersionFileIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute,
    deleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdRouteHandler,
  )

export default app

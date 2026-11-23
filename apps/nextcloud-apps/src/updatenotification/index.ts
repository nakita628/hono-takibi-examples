import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionRoute,
  getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdRoute,
} from './routes'
import {
  getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionRouteHandler,
  getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionRoute,
    getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdRoute,
    getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdRouteHandler,
  )

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionRoute,
  getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })

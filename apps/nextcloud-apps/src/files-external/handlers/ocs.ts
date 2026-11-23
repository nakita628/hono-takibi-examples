import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpAppsFilesExternalApiV1MountsRoute } from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app.openapi(getOcsV2PhpAppsFilesExternalApiV1MountsRoute, (c) => {
  throw new Error('Not implemented')
})

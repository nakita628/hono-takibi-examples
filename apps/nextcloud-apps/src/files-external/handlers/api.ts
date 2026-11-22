import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpAppsFilesExternalApiV1MountsRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(getOcsV2PhpAppsFilesExternalApiV1MountsRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcsV2PhpAppsFilesApiV1ConvertRoute } from '../routes'

const app = new OpenAPIHono()

export const conversionApiHandler = app.openapi(postOcsV2PhpAppsFilesApiV1ConvertRoute, (c) => {
  throw new Error('Not implemented')
})

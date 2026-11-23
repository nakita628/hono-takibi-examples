import { OpenAPIHono } from '@hono/zod-openapi'
import { versionV1VersionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', versionV1VersionHandler)

export default app

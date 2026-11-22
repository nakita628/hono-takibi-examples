import { OpenAPIHono } from '@hono/zod-openapi'
import { dkimConfigurationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dkimConfigurationHandler)

export default app

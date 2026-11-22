import { OpenAPIHono } from '@hono/zod-openapi'
import { storagemigrationV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', storagemigrationV1Handler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { ocsAuthapiHandler, settingsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ocsAuthapiHandler).route('/', settingsHandler)

export default app

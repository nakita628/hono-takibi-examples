import { OpenAPIHono } from '@hono/zod-openapi'
import { imagesHandler, passportsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', passportsHandler).route('/', imagesHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, idHandler, realmHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', __rootHandler).route('/', idHandler).route('/', realmHandler)

export default app

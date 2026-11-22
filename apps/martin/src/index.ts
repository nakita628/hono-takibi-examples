import { OpenAPIHono } from '@hono/zod-openapi'
import { crateSrvHandler, crateSrvOgcapiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', crateSrvHandler).route('/', crateSrvOgcapiHandler)

export default app

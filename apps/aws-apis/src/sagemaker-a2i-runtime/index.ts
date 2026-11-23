import { OpenAPIHono } from '@hono/zod-openapi'
import { humanLoopsFlowDefinitionArnHandler, humanLoopsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', humanLoopsHandler).route('/', humanLoopsFlowDefinitionArnHandler)

export default app

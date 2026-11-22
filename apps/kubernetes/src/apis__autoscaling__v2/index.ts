import { OpenAPIHono } from '@hono/zod-openapi'
import { autoscalingV2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', autoscalingV2Handler)

export default app

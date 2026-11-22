import { OpenAPIHono } from '@hono/zod-openapi'
import { autoscalingV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', autoscalingV1Handler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { stateDataStandardizationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', stateDataStandardizationHandler)

export default app

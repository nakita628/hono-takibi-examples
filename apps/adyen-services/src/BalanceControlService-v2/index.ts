import { OpenAPIHono } from '@hono/zod-openapi'
import { balanceOverviewHandler, balanceTransfersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', balanceOverviewHandler).route('/', balanceTransfersHandler)

export default app

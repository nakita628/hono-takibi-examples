import { OpenAPIHono } from '@hono/zod-openapi'
import { balancesOverviewHandler, balanceTransfersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', balancesOverviewHandler).route('/', balanceTransfersHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { getContractsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const contractsHandler = app.openapi(getContractsCountRoute, (c) => {
  throw new Error('Not implemented')
})

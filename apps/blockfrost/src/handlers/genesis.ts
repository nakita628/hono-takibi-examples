import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenesisRoute } from '../routes'

const app = new OpenAPIHono()

export const genesisHandler = app.openapi(getGenesisRoute, (c) => {
  throw new Error('Not implemented')
})

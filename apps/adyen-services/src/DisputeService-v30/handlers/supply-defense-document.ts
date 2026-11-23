import { OpenAPIHono } from '@hono/zod-openapi'
import { postSupplyDefenseDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const supplyDefenseDocumentHandler = app.openapi(postSupplyDefenseDocumentRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getMapsSpeciesTypeKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const mapHandler = app.openapi(getMapsSpeciesTypeKeyRoute, (c) => {
  throw new Error('Not implemented')
})

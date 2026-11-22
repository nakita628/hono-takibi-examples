import { OpenAPIHono } from '@hono/zod-openapi'
import { getOntolLabelerIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const ontolLabelerHandler = app.openapi(getOntolLabelerIndexRoute, (c) => {
  throw new Error('Not implemented')
})

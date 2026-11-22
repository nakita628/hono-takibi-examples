import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi10ProgramsRoute } from '../routes'

const app = new OpenAPIHono()

export const programsHandler = app.openapi(getApi10ProgramsRoute, (c) => {
  throw new Error('Not implemented')
})

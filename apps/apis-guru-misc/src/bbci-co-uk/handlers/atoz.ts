import { OpenAPIHono } from '@hono/zod-openapi'
import { getAtozLetterProgrammesRoute } from '../routes'

const app = new OpenAPIHono()

export const atozHandler = app.openapi(getAtozLetterProgrammesRoute, (c) => {
  throw new Error('Not implemented')
})

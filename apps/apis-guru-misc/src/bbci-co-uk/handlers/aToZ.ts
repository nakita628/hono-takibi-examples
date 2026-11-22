import { OpenAPIHono } from '@hono/zod-openapi'
import { getAtozLetterProgrammesRoute } from '../routes'

const app = new OpenAPIHono()

export const aToZHandler = app.openapi(getAtozLetterProgrammesRoute, (c) => {
  throw new Error('Not implemented')
})

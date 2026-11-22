import { OpenAPIHono } from '@hono/zod-openapi'
import { getNumbersRandomRoute } from '../routes'

const app = new OpenAPIHono()

export const numberGenerationHandler = app.openapi(getNumbersRandomRoute, (c) => {
  throw new Error('Not implemented')
})

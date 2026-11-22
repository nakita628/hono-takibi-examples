import { OpenAPIHono } from '@hono/zod-openapi'
import { getNumbersNodRoute } from '../routes'

const app = new OpenAPIHono()

export const numberOfTheDayHandler = app.openapi(getNumbersNodRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getShakespeareTranslateRoute } from '../routes'

const app = new OpenAPIHono()

export const translationHandler = app.openapi(getShakespeareTranslateRoute, (c) => {
  throw new Error('Not implemented')
})

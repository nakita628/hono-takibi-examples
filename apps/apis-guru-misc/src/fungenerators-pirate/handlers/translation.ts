import { OpenAPIHono } from '@hono/zod-openapi'
import { getPirateTranslateRoute } from '../routes'

const app = new OpenAPIHono()

export const translationHandler = app.openapi(getPirateTranslateRoute, (c) => {
  throw new Error('Not implemented')
})

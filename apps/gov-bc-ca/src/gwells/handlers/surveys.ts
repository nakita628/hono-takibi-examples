import { OpenAPIHono } from '@hono/zod-openapi'
import { getSurveysIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const surveysHandler = app.openapi(getSurveysIndexRoute, (c) => {
  throw new Error('Not implemented')
})

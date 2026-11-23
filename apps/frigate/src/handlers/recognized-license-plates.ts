import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecognizedLicensePlatesRoute } from '../routes'

const app = new OpenAPIHono()

export const recognizedLicensePlatesHandler = app.openapi(getRecognizedLicensePlatesRoute, (c) => {
  throw new Error('Not implemented')
})

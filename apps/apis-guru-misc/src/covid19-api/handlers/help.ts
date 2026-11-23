import { OpenAPIHono } from '@hono/zod-openapi'
import { getHelpCountriesRoute } from '../routes'

const app = new OpenAPIHono()

export const helpHandler = app.openapi(getHelpCountriesRoute, (c) => {
  throw new Error('Not implemented')
})

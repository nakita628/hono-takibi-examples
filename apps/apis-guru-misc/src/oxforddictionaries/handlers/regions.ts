import { OpenAPIHono } from '@hono/zod-openapi'
import { getRegionsSourceLanguageRoute } from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app.openapi(getRegionsSourceLanguageRoute, (c) => {
  throw new Error('Not implemented')
})

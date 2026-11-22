import { OpenAPIHono } from '@hono/zod-openapi'
import { postApikeysModeImportFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const apikeysModeImportFormatHandler = app.openapi(postApikeysModeImportFormatRoute, (c) => {
  throw new Error('Not implemented')
})

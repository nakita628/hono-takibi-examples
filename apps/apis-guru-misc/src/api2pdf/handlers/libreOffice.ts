import { OpenAPIHono } from '@hono/zod-openapi'
import { postLibreofficeConvertRoute } from '../routes'

const app = new OpenAPIHono()

export const libreOfficeHandler = app.openapi(postLibreofficeConvertRoute, (c) => {
  throw new Error('Not implemented')
})

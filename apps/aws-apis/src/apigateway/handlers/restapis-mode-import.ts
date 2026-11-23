import { OpenAPIHono } from '@hono/zod-openapi'
import { postRestapisModeImportRoute } from '../routes'

const app = new OpenAPIHono()

export const restapisModeImportHandler = app.openapi(postRestapisModeImportRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV3MovieImportRoute } from '../routes'

const app = new OpenAPIHono()

export const movieImportHandler = app.openapi(postApiV3MovieImportRoute, (c) => {
  throw new Error('Not implemented')
})

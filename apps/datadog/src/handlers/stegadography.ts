import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2StegadographyGetWidgetsRoute } from '../routes'

const app = new OpenAPIHono()

export const stegadographyHandler = app.openapi(postApiV2StegadographyGetWidgetsRoute, (c) => {
  throw new Error('Not implemented')
})

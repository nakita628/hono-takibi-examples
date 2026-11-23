import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreatepermissionversionRoute } from '../routes'

const app = new OpenAPIHono()

export const createpermissionversionHandler = app.openapi(postCreatepermissionversionRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getSoundboardDefaultSoundsRoute } from '../routes'

const app = new OpenAPIHono()

export const soundboardDefaultSoundsHandler = app.openapi(getSoundboardDefaultSoundsRoute, (c) => {
  throw new Error('Not implemented')
})

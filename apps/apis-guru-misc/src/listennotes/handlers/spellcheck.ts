import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpellcheckRoute } from '../routes'

const app = new OpenAPIHono()

export const spellcheckHandler = app.openapi(getSpellcheckRoute, (c) => {
  throw new Error('Not implemented')
})

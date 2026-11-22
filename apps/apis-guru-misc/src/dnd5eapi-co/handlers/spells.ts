import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSpellsIndexRoute, getApiSpellsRoute } from '../routes'

const app = new OpenAPIHono()

export const spellsHandler = app
  .openapi(getApiSpellsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpellsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

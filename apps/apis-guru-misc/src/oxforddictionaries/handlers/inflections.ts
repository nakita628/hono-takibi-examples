import { OpenAPIHono } from '@hono/zod-openapi'
import { getInflectionsSourceLangWordIdFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const inflectionsHandler = app.openapi(getInflectionsSourceLangWordIdFiltersRoute, (c) => {
  throw new Error('Not implemented')
})

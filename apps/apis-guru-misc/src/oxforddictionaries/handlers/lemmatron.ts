import { OpenAPIHono } from '@hono/zod-openapi'
import { getInflectionsSourceLangWordIdFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const lemmatronHandler = app.openapi(getInflectionsSourceLangWordIdFiltersRoute, (c) => {
  throw new Error('Not implemented')
})

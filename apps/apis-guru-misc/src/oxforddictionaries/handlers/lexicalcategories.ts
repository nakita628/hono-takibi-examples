import { OpenAPIHono } from '@hono/zod-openapi'
import { getLexicalcategoriesLanguageRoute } from '../routes'

const app = new OpenAPIHono()

export const lexicalcategoriesHandler = app.openapi(getLexicalcategoriesLanguageRoute, (c) => {
  throw new Error('Not implemented')
})

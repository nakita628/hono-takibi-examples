import { OpenAPIHono } from '@hono/zod-openapi'
import { getBuscaautocompleteRoute } from '../routes'

const app = new OpenAPIHono()

export const autocompleteHandler = app.openapi(getBuscaautocompleteRoute, (c) => {
  throw new Error('Not implemented')
})

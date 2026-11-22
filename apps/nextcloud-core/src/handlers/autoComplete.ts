import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpCoreAutocompleteGetRoute } from '../routes'

const app = new OpenAPIHono()

export const autoCompleteHandler = app.openapi(getOcsV2PhpCoreAutocompleteGetRoute, (c) => {
  throw new Error('Not implemented')
})

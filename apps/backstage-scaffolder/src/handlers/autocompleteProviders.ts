import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2AutocompleteProviderResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const autocompleteProvidersHandler = app.openapi(
  postV2AutocompleteProviderResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

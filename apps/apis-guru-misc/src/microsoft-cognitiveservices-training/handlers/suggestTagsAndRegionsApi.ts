import { OpenAPIHono } from '@hono/zod-openapi'
import { postProjectsProjectIdTagsandregionsSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const suggestTagsAndRegionsApiHandler = app.openapi(
  postProjectsProjectIdTagsandregionsSuggestionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

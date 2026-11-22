import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetfullnameparsedmatchRoute } from '../routes'

const app = new OpenAPIHono()

export const fullNameParsedSimilarityKeyHandler = app.openapi(
  getGetfullnameparsedmatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

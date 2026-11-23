import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBooksIdSentencesRoute,
  getBooksRoute,
  getSentencesIdRoute,
  getSentencesRoute,
} from './routes'
import {
  getBooksIdSentencesRouteHandler,
  getBooksRouteHandler,
  getSentencesIdRouteHandler,
  getSentencesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBooksRoute, getBooksRouteHandler)
  .openapi(getBooksIdSentencesRoute, getBooksIdSentencesRouteHandler)
  .openapi(getSentencesRoute, getSentencesRouteHandler)
  .openapi(getSentencesIdRoute, getSentencesIdRouteHandler)

export default app

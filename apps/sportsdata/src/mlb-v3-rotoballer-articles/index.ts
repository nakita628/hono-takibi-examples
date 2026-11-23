import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatRotoBallerArticlesByDateDateRoute,
  getFormatRotoBallerArticlesByPlayerIDPlayeridRoute,
  getFormatRotoBallerArticlesRoute,
} from './routes'
import {
  getFormatRotoBallerArticlesByDateDateRouteHandler,
  getFormatRotoBallerArticlesByPlayerIDPlayeridRouteHandler,
  getFormatRotoBallerArticlesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFormatRotoBallerArticlesRoute, getFormatRotoBallerArticlesRouteHandler)
  .openapi(
    getFormatRotoBallerArticlesByDateDateRoute,
    getFormatRotoBallerArticlesByDateDateRouteHandler,
  )
  .openapi(
    getFormatRotoBallerArticlesByPlayerIDPlayeridRoute,
    getFormatRotoBallerArticlesByPlayerIDPlayeridRouteHandler,
  )

export default app

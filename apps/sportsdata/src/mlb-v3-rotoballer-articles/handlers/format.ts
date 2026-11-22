import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatRotoBallerArticlesByDateDateRoute,
  getFormatRotoBallerArticlesByPlayerIDPlayeridRoute,
  getFormatRotoBallerArticlesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatRotoBallerArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRotoBallerArticlesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRotoBallerArticlesByPlayerIDPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })

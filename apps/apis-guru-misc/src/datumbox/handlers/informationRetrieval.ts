import { OpenAPIHono } from '@hono/zod-openapi'
import { post10KeywordExtractionJsonRoute, post10TextExtractionJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const informationRetrievalHandler = app
  .openapi(post10KeywordExtractionJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10TextExtractionJsonRoute, (c) => {
    throw new Error('Not implemented')
  })

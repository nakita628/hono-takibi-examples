import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchV1DatasetRoute, getSearchV1QuestionRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchV1DatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchV1QuestionRoute, (c) => {
    throw new Error('Not implemented')
  })

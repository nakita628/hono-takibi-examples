import { OpenAPIHono } from '@hono/zod-openapi'
import { getBadWordsRoute } from '../routes'

const app = new OpenAPIHono()

export const badWordsHandler = app.openapi(getBadWordsRoute, (c) => {
  throw new Error('Not implemented')
})

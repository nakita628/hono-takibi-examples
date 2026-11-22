import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDCardDebitRoute } from '../routes'

const app = new OpenAPIHono()

export const cardDebitHandler = app.openapi(postUserUserIDCardDebitRoute, (c) => {
  throw new Error('Not implemented')
})

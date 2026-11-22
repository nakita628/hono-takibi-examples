import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDCardCreditRoute } from '../routes'

const app = new OpenAPIHono()

export const cardCreditHandler = app.openapi(postUserUserIDCardCreditRoute, (c) => {
  throw new Error('Not implemented')
})

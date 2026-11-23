import { OpenAPIHono } from '@hono/zod-openapi'
import { postMakeSubUserKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const makeSubUserKeyHandler = app.openapi(postMakeSubUserKeyRoute, (c) => {
  throw new Error('Not implemented')
})

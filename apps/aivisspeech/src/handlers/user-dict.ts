import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserDictRoute } from '../routes'

const app = new OpenAPIHono()

export const userDictHandler = app.openapi(getUserDictRoute, (c) => {
  throw new Error('Not implemented')
})

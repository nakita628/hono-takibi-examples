import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDLegalNameRoute } from '../routes'

const app = new OpenAPIHono()

export const legalNameHandler = app.openapi(getUserUserIDLegalNameRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicKeysAccountKindIdentifierRoute } from '../routes'

const app = new OpenAPIHono()

export const publicKeysHandler = app.openapi(getPublicKeysAccountKindIdentifierRoute, (c) => {
  throw new Error('Not implemented')
})

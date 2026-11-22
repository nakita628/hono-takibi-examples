import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OwnerTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const ownerTypesHandler = app.openapi(getV1OwnerTypesRoute, (c) => {
  throw new Error('Not implemented')
})

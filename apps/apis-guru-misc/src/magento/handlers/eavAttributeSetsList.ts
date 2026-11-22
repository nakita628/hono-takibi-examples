import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1EavAttributeSetsListRoute } from '../routes'

const app = new OpenAPIHono()

export const eavAttributeSetsListHandler = app.openapi(getV1EavAttributeSetsListRoute, (c) => {
  throw new Error('Not implemented')
})

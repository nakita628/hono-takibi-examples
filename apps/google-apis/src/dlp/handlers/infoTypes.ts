import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2InfoTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const infoTypesHandler = app.openapi(getV2InfoTypesRoute, (c) => {
  throw new Error('Not implemented')
})

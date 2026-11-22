import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiV2ParseDagFileFileTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const dagParsingHandler = app.openapi(putApiV2ParseDagFileFileTokenRoute, (c) => {
  throw new Error('Not implemented')
})

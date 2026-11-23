import { OpenAPIHono } from '@hono/zod-openapi'
import { putListAllTokenIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const listAllTokenIdsHandler = app.openapi(putListAllTokenIdsRoute, (c) => {
  throw new Error('Not implemented')
})

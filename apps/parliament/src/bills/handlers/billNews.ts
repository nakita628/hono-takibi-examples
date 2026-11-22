import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1BillsBillIdNewsArticlesRoute } from '../routes'

const app = new OpenAPIHono()

export const billNewsHandler = app.openapi(getApiV1BillsBillIdNewsArticlesRoute, (c) => {
  throw new Error('Not implemented')
})

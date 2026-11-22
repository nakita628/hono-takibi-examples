import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProjectsProjectIdPurchasesRoute } from '../routes'

const app = new OpenAPIHono()

export const purchasesHandler = app.openapi(getV1ProjectsProjectIdPurchasesRoute, (c) => {
  throw new Error('Not implemented')
})

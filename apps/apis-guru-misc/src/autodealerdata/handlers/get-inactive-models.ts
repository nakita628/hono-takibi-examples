import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetInactiveModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const getInactiveModelsHandler = app.openapi(getGetInactiveModelsRoute, (c) => {
  throw new Error('Not implemented')
})

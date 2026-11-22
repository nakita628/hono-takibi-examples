import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetareacodeRoute } from '../routes'

const app = new OpenAPIHono()

export const areaCodeInformationHandler = app.openapi(getGetareacodeRoute, (c) => {
  throw new Error('Not implemented')
})

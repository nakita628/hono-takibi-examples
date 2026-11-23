import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetWorkUnitsRoute } from '../routes'

const app = new OpenAPIHono()

export const getWorkUnitsHandler = app.openapi(postGetWorkUnitsRoute, (c) => {
  throw new Error('Not implemented')
})

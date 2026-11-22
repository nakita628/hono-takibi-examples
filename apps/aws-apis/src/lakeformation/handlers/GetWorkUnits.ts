import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetWorkUnitsRoute } from '../routes'

const app = new OpenAPIHono()

export const GetWorkUnitsHandler = app.openapi(postGetWorkUnitsRoute, (c) => {
  throw new Error('Not implemented')
})

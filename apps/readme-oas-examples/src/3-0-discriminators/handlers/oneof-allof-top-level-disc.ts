import { OpenAPIHono } from '@hono/zod-openapi'
import { patchOneofAllofTopLevelDiscRoute } from '../routes'

const app = new OpenAPIHono()

export const oneofAllofTopLevelDiscHandler = app.openapi(patchOneofAllofTopLevelDiscRoute, (c) => {
  throw new Error('Not implemented')
})

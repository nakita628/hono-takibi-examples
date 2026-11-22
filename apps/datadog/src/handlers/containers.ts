import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ContainersRoute } from '../routes'

const app = new OpenAPIHono()

export const containersHandler = app.openapi(getApiV2ContainersRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenaiModelsRoute, getGenaiRolesRoute, postGenaiProbeRoute } from '../routes'

const app = new OpenAPIHono()

export const genaiHandler = app
  .openapi(getGenaiModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenaiRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenaiProbeRoute, (c) => {
    throw new Error('Not implemented')
  })

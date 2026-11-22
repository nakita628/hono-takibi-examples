import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta2NameCalculateRoute, getV1beta2NameRoute, patchV1beta2NameRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2NameCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })

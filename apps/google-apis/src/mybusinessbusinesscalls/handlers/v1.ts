import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute, getV1ParentBusinesscallsinsightsRoute, patchV1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentBusinesscallsinsightsRoute, (c) => {
    throw new Error('Not implemented')
  })

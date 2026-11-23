import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1NameRoute, getV1NameRoute, patchV1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })

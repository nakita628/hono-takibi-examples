import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameGetGoogleUpdatedRoute, getV1NameRoute, patchV1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameGetGoogleUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })

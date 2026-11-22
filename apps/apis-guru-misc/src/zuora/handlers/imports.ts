import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectImportIdRoute, postV1ObjectImportRoute } from '../routes'

const app = new OpenAPIHono()

export const importsHandler = app
  .openapi(postV1ObjectImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectImportIdRoute, (c) => {
    throw new Error('Not implemented')
  })

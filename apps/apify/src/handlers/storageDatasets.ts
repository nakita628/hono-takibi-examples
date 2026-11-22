import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2DatasetsRoute, postV2DatasetsRoute } from '../routes'

const app = new OpenAPIHono()

export const storageDatasetsHandler = app
  .openapi(getV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })

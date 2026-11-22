import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DatasetIpNameRoute, getV1DatasetIpRoute } from '../routes'

const app = new OpenAPIHono()

export const platformDatasetsHandler = app
  .openapi(getV1DatasetIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetIpNameRoute, (c) => {
    throw new Error('Not implemented')
  })

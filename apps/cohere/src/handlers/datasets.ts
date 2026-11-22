import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DatasetsIdRoute,
  getV1DatasetsIdRoute,
  getV1DatasetsRoute,
  getV1DatasetsUsageRoute,
  postV1DatasetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(postV1DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

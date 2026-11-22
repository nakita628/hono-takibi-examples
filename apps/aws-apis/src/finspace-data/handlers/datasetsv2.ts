import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatasetsv2DatasetIdRoute,
  getDatasetsv2DatasetIdRoute,
  getDatasetsv2Route,
  postDatasetsv2Route,
  putDatasetsv2DatasetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsv2Handler = app
  .openapi(postDatasetsv2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsv2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasetsv2DatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsv2DatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasetsv2DatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })

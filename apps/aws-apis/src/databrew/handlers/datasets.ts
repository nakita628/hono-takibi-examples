import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatasetsNameRoute,
  getDatasetsNameRoute,
  getDatasetsRoute,
  postDatasetsRoute,
  putDatasetsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(postDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })

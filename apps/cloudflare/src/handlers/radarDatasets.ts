import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarDatasetsAliasRoute,
  getRadarDatasetsRoute,
  postRadarDatasetsDownloadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarDatasetsHandler = app
  .openapi(getRadarDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRadarDatasetsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDatasetsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })

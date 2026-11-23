import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDatasourcesS3Route,
  postDatasourcesS3StatisticsRoute,
  postDatasourcesSearchResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasourcesHandler = app
  .openapi(postDatasourcesS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesS3StatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesSearchResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })

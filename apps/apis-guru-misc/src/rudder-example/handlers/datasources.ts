import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatasourcesDatasourceIdRoute,
  getDatasourcesDatasourceIdRoute,
  getDatasourcesRoute,
  postDatasourcesDatasourceIdRoute,
  postDatasourcesReloadDatasourceIdRoute,
  postDatasourcesReloadRoute,
  putDatasourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasourcesHandler = app
  .openapi(getDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesReloadDatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasourcesDatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesDatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesDatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

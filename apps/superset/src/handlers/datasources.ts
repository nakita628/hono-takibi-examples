import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRoute,
  getApiV1DatasourceDatasourceTypeDatasourceIdRoute,
  getApiV1DatasourceIndexRoute,
  postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRoute,
  postApiV1DatasourceDatasourceTypeDatasourceIdQueryRoute,
  postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasourcesHandler = app
  .openapi(getApiV1DatasourceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasourceDatasourceTypeDatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasourceDatasourceTypeDatasourceIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

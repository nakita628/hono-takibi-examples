import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPvtCommercialconditionCommercialConditionIdRoute,
  getApiCatalogSystemPvtCommercialconditionListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commercialConditionsHandler = app
  .openapi(getApiCatalogSystemPvtCommercialconditionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtCommercialconditionCommercialConditionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

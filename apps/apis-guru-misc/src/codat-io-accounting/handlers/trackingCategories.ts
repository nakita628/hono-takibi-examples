import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdDataTrackingCategoriesRoute,
  getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trackingCategoriesHandler = app
  .openapi(getCompaniesCompanyIdDataTrackingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGwApiV1TaxVouchersActiveCountriesRoute,
  getGwApiV1TaxVouchersDividendsRoute,
  getGwApiV1TaxVouchersRequestIdDownloadRoute,
  getGwApiV1TaxVouchersRequestIdStateRoute,
  getGwApiV1TaxVouchersYearsRoute,
  postGwApiV1TaxVouchersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thirdPartiesTaxVouchersHandler = app
  .openapi(postGwApiV1TaxVouchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersActiveCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersDividendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersRequestIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersRequestIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExportsExportIdRoute,
  postExportsAttachedItemsRoute,
  postExportsCouponsRoute,
  postExportsCreditNotesRoute,
  postExportsCustomersRoute,
  postExportsDeferredRevenueRoute,
  postExportsDifferentialPricesRoute,
  postExportsInvoicesRoute,
  postExportsItemFamiliesRoute,
  postExportsItemPricesRoute,
  postExportsItemsRoute,
  postExportsOrdersRoute,
  postExportsPriceVariantsRoute,
  postExportsRampsRoute,
  postExportsRevenueRecognitionRoute,
  postExportsSubscriptionsRoute,
  postExportsTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(postExportsCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsAttachedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsRampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsDifferentialPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsItemFamiliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsPriceVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsDeferredRevenueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsRevenueRecognitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsItemPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

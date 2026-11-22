import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2UserMarketplacesOrdersInvoicesGenerateRoute,
  postV2UserMarketplacesOrdersInvoicesGetPdfInvoiceRoute,
  postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateRoute,
  postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omInvoice__API__GenerationHandler = app
  .openapi(postV2UserMarketplacesOrdersInvoicesGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersInvoicesGetPdfInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1RevenueSchedulesRsNumberRoute,
  getV1RevenueSchedulesCreditMemoItemsCmiIdRoute,
  getV1RevenueSchedulesDebitMemoItemsDmiIdRoute,
  getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute,
  getV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute,
  getV1RevenueSchedulesProductChargesChargeKeyAccountKeyRoute,
  getV1RevenueSchedulesRsNumberRoute,
  getV1RevenueSchedulesSubscriptionChargesChargeKeyRoute,
  postV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeRoute,
  postV1RevenueSchedulesCreditMemoItemsCmiIdRoute,
  postV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeRoute,
  postV1RevenueSchedulesDebitMemoItemsDmiIdRoute,
  postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeRoute,
  postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute,
  postV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeRoute,
  postV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute,
  postV1RevenueSchedulesSubscriptionChargesChargeKeyRoute,
  putV1RevenueSchedulesRsNumberBasicInformationRoute,
  putV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsRoute,
  putV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateRoute,
  putV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const revenueSchedulesHandler = app
  .openapi(getV1RevenueSchedulesCreditMemoItemsCmiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesCreditMemoItemsCmiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueSchedulesDebitMemoItemsDmiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesDebitMemoItemsDmiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesInvoiceItemsInvoiceItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1RevenueSchedulesProductChargesChargeKeyAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueSchedulesSubscriptionChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RevenueSchedulesSubscriptionChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueSchedulesRsNumberBasicInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueSchedulesRsNumberDistributeRevenueWithDateRangeRoute, (c) => {
    throw new Error('Not implemented')
  })

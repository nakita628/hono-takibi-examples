import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2beta1NameRoute,
  getV2beta1FilterSetNameBidMetricsRoute,
  getV2beta1FilterSetNameBidResponseErrorsRoute,
  getV2beta1FilterSetNameBidResponsesWithoutBidsRoute,
  getV2beta1FilterSetNameFilteredBidRequestsRoute,
  getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesRoute,
  getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsRoute,
  getV2beta1FilterSetNameFilteredBidsRoute,
  getV2beta1FilterSetNameImpressionMetricsRoute,
  getV2beta1FilterSetNameLosingBidsRoute,
  getV2beta1FilterSetNameNonBillableWinningBidsRoute,
  getV2beta1NameRoute,
  getV2beta1OwnerNameFilterSetsRoute,
  postV2beta1OwnerNameFilterSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const biddersHandler = app
  .openapi(getV2beta1FilterSetNameBidMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameBidResponseErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameBidResponsesWithoutBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameFilteredBidRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameFilteredBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameImpressionMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameLosingBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1FilterSetNameNonBillableWinningBidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1OwnerNameFilterSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2beta1OwnerNameFilterSetsRoute, (c) => {
    throw new Error('Not implemented')
  })

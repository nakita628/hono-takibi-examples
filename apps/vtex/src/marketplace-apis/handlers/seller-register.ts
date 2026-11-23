import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
  deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
  getSellerRegisterPvtSellerLeadsRoute,
  getSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
  getSellerRegisterPvtSellersRoute,
  getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
  getSellerRegisterPvtSellersSellerIdCommissionsRoute,
  getSellerRegisterPvtSellersSellerIdRoute,
  getSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute,
  patchSellerRegisterPvtSellersSellerIdRoute,
  postSellerRegisterPvtSellerLeadsRoute,
  postSellerRegisterPvtSellersRoute,
  putSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
  putSellerRegisterPvtSellerLeadsSellerLeadIdSellerRoute,
  putSellerRegisterPvtSellerLeadsSellerLeadIdStatusRoute,
  putSellerRegisterPvtSellersSellerIdCommissionsCategoriesRoute,
  putSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
  putSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sellerRegisterHandler = app
  .openapi(getSellerRegisterPvtSellerLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSellerRegisterPvtSellerLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSellerRegisterPvtSellerLeadsSellerLeadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerRegisterPvtSellerLeadsSellerLeadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellerLeadsSellerLeadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellerLeadsSellerLeadIdSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellerLeadsSellerLeadIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerRegisterPvtSellersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSellerRegisterPvtSellersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerRegisterPvtSellersSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSellerRegisterPvtSellersSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerRegisterPvtSellersSellerIdCommissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellersSellerIdCommissionsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminPromotionsIdRoute,
  getAdminPromotionsIdRoute,
  getAdminPromotionsIdRuleTypeRoute,
  getAdminPromotionsRoute,
  getAdminPromotionsRuleAttributeOptionsRuleTypeRoute,
  getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdRoute,
  postAdminPromotionsIdBuyRulesBatchRoute,
  postAdminPromotionsIdRoute,
  postAdminPromotionsIdRulesBatchRoute,
  postAdminPromotionsIdTargetRulesBatchRoute,
  postAdminPromotionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const promotionsHandler = app
  .openapi(getAdminPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPromotionsRuleAttributeOptionsRuleTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPromotionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPromotionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsIdBuyRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsIdRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsIdTargetRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPromotionsIdRuleTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

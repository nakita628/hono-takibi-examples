import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVCustomPricesRulesPriceAssociationIdRoute,
  getVCustomPricesRulesPriceAssociationIdRoute,
  postVCustomPricesRulesRoute,
  putVCustomPricesRulesPriceAssociationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const priceAssociationHandler = app
  .openapi(postVCustomPricesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVCustomPricesRulesPriceAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVCustomPricesRulesPriceAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVCustomPricesRulesPriceAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

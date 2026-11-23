import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVCustomPricesRulesPriceAssociationIdRoute,
  getVCustomPricesRulesPriceAssociationIdRoute,
  getVCustomPricesSessionSchemaRoute,
  postVCustomPricesRulesRoute,
  postVCustomPricesSessionSchemaRoute,
  putVCustomPricesRulesPriceAssociationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vHandler = app
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
  .openapi(getVCustomPricesSessionSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVCustomPricesSessionSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })

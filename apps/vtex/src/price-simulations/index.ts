import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVCustomPricesRulesPriceAssociationIdRoute,
  getVCustomPricesRulesPriceAssociationIdRoute,
  getVCustomPricesSessionSchemaRoute,
  postSessionsIndexRoute,
  postVCustomPricesRulesRoute,
  postVCustomPricesSessionSchemaRoute,
  putVCustomPricesRulesPriceAssociationIdRoute,
} from './routes'
import {
  deleteVCustomPricesRulesPriceAssociationIdRouteHandler,
  getVCustomPricesRulesPriceAssociationIdRouteHandler,
  getVCustomPricesSessionSchemaRouteHandler,
  postSessionsIndexRouteHandler,
  postVCustomPricesRulesRouteHandler,
  postVCustomPricesSessionSchemaRouteHandler,
  putVCustomPricesRulesPriceAssociationIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postVCustomPricesRulesRoute, postVCustomPricesRulesRouteHandler)
  .openapi(
    deleteVCustomPricesRulesPriceAssociationIdRoute,
    deleteVCustomPricesRulesPriceAssociationIdRouteHandler,
  )
  .openapi(
    getVCustomPricesRulesPriceAssociationIdRoute,
    getVCustomPricesRulesPriceAssociationIdRouteHandler,
  )
  .openapi(
    putVCustomPricesRulesPriceAssociationIdRoute,
    putVCustomPricesRulesPriceAssociationIdRouteHandler,
  )
  .openapi(getVCustomPricesSessionSchemaRoute, getVCustomPricesSessionSchemaRouteHandler)
  .openapi(postVCustomPricesSessionSchemaRoute, postVCustomPricesSessionSchemaRouteHandler)
  .openapi(postSessionsIndexRoute, postSessionsIndexRouteHandler)

export default app

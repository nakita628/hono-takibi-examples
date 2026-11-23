import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmPropertyValidations202609ObjectTypeIdPropertyNameRoute,
  getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute,
  getCrmPropertyValidations202609ObjectTypeIdRoute,
  putCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute,
} from './routes'
import {
  getCrmPropertyValidations202609ObjectTypeIdPropertyNameRouteHandler,
  getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRouteHandler,
  getCrmPropertyValidations202609ObjectTypeIdRouteHandler,
  putCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCrmPropertyValidations202609ObjectTypeIdRoute,
    getCrmPropertyValidations202609ObjectTypeIdRouteHandler,
  )
  .openapi(
    getCrmPropertyValidations202609ObjectTypeIdPropertyNameRoute,
    getCrmPropertyValidations202609ObjectTypeIdPropertyNameRouteHandler,
  )
  .openapi(
    getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute,
    getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRouteHandler,
  )
  .openapi(
    putCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute,
    putCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRouteHandler,
  )

export default app

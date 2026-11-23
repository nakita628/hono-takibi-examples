import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmPropertyValidations202609ObjectTypeIdPropertyNameRoute,
  getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute,
  getCrmPropertyValidations202609ObjectTypeIdRoute,
  putCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmPropertyValidations202609ObjectTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPropertyValidations202609ObjectTypeIdPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

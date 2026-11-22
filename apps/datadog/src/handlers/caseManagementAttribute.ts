import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CasesTypesCaseTypeIdCustomAttributesCustomAttributeIdRoute,
  getApiV2CasesTypesCaseTypeIdCustomAttributesRoute,
  getApiV2CasesTypesCustomAttributesRoute,
  postApiV2CasesTypesCaseTypeIdCustomAttributesRoute,
  putApiV2CasesTypesCaseTypeIdCustomAttributesCustomAttributeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseManagementAttributeHandler = app
  .openapi(getApiV2CasesTypesCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CasesTypesCaseTypeIdCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesTypesCaseTypeIdCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesTypesCaseTypeIdCustomAttributesCustomAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CasesTypesCaseTypeIdCustomAttributesCustomAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CasesTypesCaseTypeIdRoute,
  getApiV2CasesTypesRoute,
  postApiV2CasesTypesRoute,
  putApiV2CasesTypesCaseTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseManagementTypeHandler = app
  .openapi(getApiV2CasesTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CasesTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CasesTypesCaseTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CasesTypesCaseTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })

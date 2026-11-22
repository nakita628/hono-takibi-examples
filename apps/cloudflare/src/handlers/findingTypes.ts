import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDataSecurityPostureFindingTypesFindingTypeIdRoute,
  getAccountsAccountIdDataSecurityPostureFindingTypesFindingTypeIdRemediationTypesRoute,
  getAccountsAccountIdDataSecurityPostureFindingTypesFindingTypeIdRoute,
  getAccountsAccountIdDataSecurityPostureFindingTypesRoute,
  postAccountsAccountIdDataSecurityPostureFindingTypesRoute,
  postAccountsAccountIdDataSecurityPostureFindingTypesValidateRoute,
  putAccountsAccountIdDataSecurityPostureFindingTypesFindingTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const findingTypesHandler = app
  .openapi(getAccountsAccountIdDataSecurityPostureFindingTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureFindingTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureFindingTypesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDataSecurityPostureFindingTypesFindingTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDataSecurityPostureFindingTypesFindingTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDataSecurityPostureFindingTypesFindingTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdDataSecurityPostureFindingTypesFindingTypeIdRemediationTypesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

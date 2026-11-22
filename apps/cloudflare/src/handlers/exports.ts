import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDataSecurityPostureExportsIdRoute,
  getAccountsAccountIdDataSecurityPostureExportsRoute,
  postAccountsAccountIdDataSecurityPostureContentExportRoute,
  postAccountsAccountIdDataSecurityPostureFindingsExportRoute,
  postAccountsAccountIdDataSecurityPostureFindingsStorageNamespaceIdInstancesExportRoute,
  postAccountsAccountIdDataSecurityPostureRemediationsJobsExportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(postAccountsAccountIdDataSecurityPostureContentExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDataSecurityPostureExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDataSecurityPostureExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureFindingsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdDataSecurityPostureFindingsStorageNamespaceIdInstancesExportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAccountsAccountIdDataSecurityPostureRemediationsJobsExportRoute, (c) => {
    throw new Error('Not implemented')
  })

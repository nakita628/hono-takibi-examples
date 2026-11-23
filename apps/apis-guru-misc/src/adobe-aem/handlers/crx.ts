import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrxPackmgrInstallstatusJspRoute,
  getCrxPackmgrServiceScriptHtmlRoute,
  getCrxServerCrxDefaultJcrRoot1JsonRoute,
  postCrxExplorerUiSetpasswordJspRoute,
  postCrxPackmgrServiceJsonPathRoute,
  postCrxPackmgrServiceJspRoute,
  postCrxPackmgrUpdateJspRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crxHandler = app
  .openapi(postCrxExplorerUiSetpasswordJspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrxPackmgrInstallstatusJspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrxPackmgrServiceJspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrxPackmgrServiceJsonPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrxPackmgrServiceScriptHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrxPackmgrUpdateJspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrxServerCrxDefaultJcrRoot1JsonRoute, (c) => {
    throw new Error('Not implemented')
  })

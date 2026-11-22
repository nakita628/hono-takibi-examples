import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdTerminalActionsActionIdRoute,
  getCompaniesCompanyIdTerminalActionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalActions__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdTerminalActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdTerminalLogosRoute,
  getCompaniesCompanyIdTerminalSettingsRoute,
  patchCompaniesCompanyIdTerminalLogosRoute,
  patchCompaniesCompanyIdTerminalSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalSettings__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })

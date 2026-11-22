import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdTerminalThemesIdAssetsRoute,
  deleteCompaniesCompanyIdTerminalThemesIdRoute,
  getCompaniesCompanyIdTerminalThemesIdRoute,
  getCompaniesCompanyIdTerminalThemesRoute,
  patchCompaniesCompanyIdTerminalThemesIdRoute,
  postCompaniesCompanyIdTerminalThemesIdApplyRoute,
  postCompaniesCompanyIdTerminalThemesIdAssetsReplaceRoute,
  postCompaniesCompanyIdTerminalThemesIdAssetsRoute,
  postCompaniesCompanyIdTerminalThemesRoute,
  postCompaniesCompanyIdTerminalThemesUnapplyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalThemes__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdTerminalThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdTerminalThemesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesIdAssetsReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })

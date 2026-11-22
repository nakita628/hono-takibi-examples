import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPortfoliosPortfolioGidProjectPortfolioSettingsRoute,
  getProjectPortfolioSettingsProjectPortfolioSettingGidRoute,
  getProjectsProjectGidProjectPortfolioSettingsRoute,
  putProjectPortfolioSettingsProjectPortfolioSettingGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectPortfolioSettingsHandler = app
  .openapi(getProjectPortfolioSettingsProjectPortfolioSettingGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectPortfolioSettingsProjectPortfolioSettingGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGidProjectPortfolioSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortfoliosPortfolioGidProjectPortfolioSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })

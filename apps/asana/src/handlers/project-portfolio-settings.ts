import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectPortfolioSettingsProjectPortfolioSettingGidRoute,
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

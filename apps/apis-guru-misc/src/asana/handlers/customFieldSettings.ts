import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPortfoliosPortfolioGidCustomFieldSettingsRoute,
  getProjectsProjectGidCustomFieldSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFieldSettingsHandler = app
  .openapi(getPortfoliosPortfolioGidCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGidCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })

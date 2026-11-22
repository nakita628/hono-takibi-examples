import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGoalsGoalGidCustomFieldSettingsRoute,
  getPortfoliosPortfolioGidCustomFieldSettingsRoute,
  getProjectsProjectGidCustomFieldSettingsRoute,
  getTeamsTeamGidCustomFieldSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFieldSettingsHandler = app
  .openapi(getProjectsProjectGidCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortfoliosPortfolioGidCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoalsGoalGidCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsUsernameProjectSlugFiltersIdentifierRoute,
  getProjectsUsernameProjectSlugFiltersRoute,
  getProjectsUsernameRoute,
  postProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorRoute,
  postProjectsUsernameProjectSlugUrlsAggsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsUsernameProjectSlugFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsUsernameProjectSlugFiltersIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsUsernameProjectSlugUrlsAggsRoute, (c) => {
    throw new Error('Not implemented')
  })

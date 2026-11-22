import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalysesUsernameProjectSlugRoute,
  getProjectsUsernameProjectSlugFiltersIdentifierRoute,
  getProjectsUsernameProjectSlugFiltersRoute,
  postProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorRoute,
  postProjectsUsernameProjectSlugUrlsAggsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectHandler = app
  .openapi(getAnalysesUsernameProjectSlugRoute, (c) => {
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

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute,
  getSeerModelsIndexRoute,
  postOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seerHandler = app
  .openapi(getSeerModelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersRoute,
  getRestApi3SecuritylevelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueSecurityLevelHandler = app
  .openapi(getRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3SecuritylevelIdRoute, (c) => {
    throw new Error('Not implemented')
  })

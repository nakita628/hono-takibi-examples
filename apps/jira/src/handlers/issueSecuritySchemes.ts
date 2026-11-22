import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberMemberIdRoute,
  deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRoute,
  deleteRestApi3IssuesecurityschemesSchemeIdRoute,
  getRestApi3IssuesecurityschemesIdRoute,
  getRestApi3IssuesecurityschemesLevelMemberRoute,
  getRestApi3IssuesecurityschemesLevelRoute,
  getRestApi3IssuesecurityschemesProjectRoute,
  getRestApi3IssuesecurityschemesRoute,
  getRestApi3IssuesecurityschemesSearchRoute,
  postRestApi3IssuesecurityschemesRoute,
  putRestApi3IssuesecurityschemesIdRoute,
  putRestApi3IssuesecurityschemesLevelDefaultRoute,
  putRestApi3IssuesecurityschemesProjectRoute,
  putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberRoute,
  putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRoute,
  putRestApi3IssuesecurityschemesSchemeIdLevelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueSecuritySchemesHandler = app
  .openapi(getRestApi3IssuesecurityschemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuesecurityschemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuesecurityschemesLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuesecurityschemesLevelDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuesecurityschemesLevelMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuesecurityschemesProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuesecurityschemesProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuesecurityschemesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuesecurityschemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuesecurityschemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuesecurityschemesSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuesecurityschemesSchemeIdLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })

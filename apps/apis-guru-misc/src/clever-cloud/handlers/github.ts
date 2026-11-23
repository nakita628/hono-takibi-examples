import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGithubLinkRoute,
  getGithubApplicationsRoute,
  getGithubCallbackRoute,
  getGithubEmailsRoute,
  getGithubKeysRoute,
  getGithubLinkRoute,
  getGithubLoginRoute,
  getGithubRoute,
  getGithubSignupRoute,
  getGithubUsernameRoute,
  postGithubRedeployRoute,
  postGithubSignupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const githubHandler = app
  .openapi(getGithubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGithubLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGithubRedeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGithubSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })

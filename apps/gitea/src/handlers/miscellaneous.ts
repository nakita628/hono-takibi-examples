import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTokenRoute,
  getGitignoreTemplatesNameRoute,
  getGitignoreTemplatesRoute,
  getLabelTemplatesNameRoute,
  getLabelTemplatesRoute,
  getLicensesNameRoute,
  getLicensesRoute,
  getSigningKeyGpgRoute,
  getSigningKeyPubRoute,
  getTokenRoute,
  getVersionRoute,
  postMarkdownRawRoute,
  postMarkdownRoute,
  postMarkupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const miscellaneousHandler = app
  .openapi(getGitignoreTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGitignoreTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarkdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarkdownRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarkupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigningKeyGpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigningKeyPubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })

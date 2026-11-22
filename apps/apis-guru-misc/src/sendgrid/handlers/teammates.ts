import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScopesRequestsRequestIdRoute,
  deleteTeammatesPendingTokenRoute,
  deleteTeammatesUsernameRoute,
  getScopesRequestsRoute,
  getTeammatesPendingRoute,
  getTeammatesRoute,
  getTeammatesUsernameRoute,
  patchScopesRequestsRequestIdApproveRoute,
  patchTeammatesUsernameRoute,
  postTeammatesPendingTokenResendRoute,
  postTeammatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teammatesHandler = app
  .openapi(getScopesRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScopesRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScopesRequestsRequestIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeammatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeammatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeammatesPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeammatesPendingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeammatesPendingTokenResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeammatesUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeammatesUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeammatesUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })

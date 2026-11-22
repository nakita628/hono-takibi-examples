import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2OrganizationsOrganizationIdRequestsRoute,
  getApiV2RequestsCcdRoute,
  getApiV2RequestsOpenRoute,
  getApiV2RequestsRequestIdCommentsRoute,
  getApiV2RequestsRequestIdCommentsTicketCommentIdRoute,
  getApiV2RequestsRequestIdRoute,
  getApiV2RequestsRoute,
  getApiV2RequestsSearchRoute,
  getApiV2RequestsSolvedRoute,
  getApiV2UsersUserIdRequestsRoute,
  postApiV2RequestsRoute,
  putApiV2RequestsRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestsHandler = app
  .openapi(getApiV2OrganizationsOrganizationIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsRequestIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsRequestIdCommentsTicketCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsCcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsSolvedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })

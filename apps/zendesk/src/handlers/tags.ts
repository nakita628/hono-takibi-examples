import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OrganizationsOrganizationIdTagsRoute,
  deleteApiV2TicketsTicketIdTagsRoute,
  deleteApiV2UsersUserIdTagsRoute,
  getApiV2AutocompleteTagsRoute,
  getApiV2OrganizationsOrganizationIdTagsRoute,
  getApiV2TagsCountRoute,
  getApiV2TagsRoute,
  getApiV2TicketsTicketIdTagsRoute,
  getApiV2UsersUserIdTagsRoute,
  postApiV2AutocompleteTagsRoute,
  postApiV2OrganizationsOrganizationIdTagsRoute,
  postApiV2TicketsTicketIdTagsRoute,
  postApiV2UsersUserIdTagsRoute,
  putApiV2OrganizationsOrganizationIdTagsRoute,
  putApiV2TicketsTicketIdTagsRoute,
  putApiV2UsersUserIdTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getApiV2AutocompleteTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AutocompleteTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsOrganizationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationsOrganizationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationsOrganizationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })

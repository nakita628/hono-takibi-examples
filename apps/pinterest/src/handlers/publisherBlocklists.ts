import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute,
  getAdAccountsAdAccountIdPublisherBlocklistsRoute,
  patchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute,
  patchAdAccountsAdAccountIdPublisherBlocklistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publisherBlocklistsHandler = app
  .openapi(getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdPublisherBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdPublisherBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdSamlGroupLinksSamlGroupNameRoute,
  getApiV4GroupsIdSamlGroupLinksRoute,
  getApiV4GroupsIdSamlGroupLinksSamlGroupNameRoute,
  postApiV4GroupsIdSamlGroupLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const samlGroupLinksHandler = app
  .openapi(getApiV4GroupsIdSamlGroupLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdSamlGroupLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdSamlGroupLinksSamlGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdSamlGroupLinksSamlGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })

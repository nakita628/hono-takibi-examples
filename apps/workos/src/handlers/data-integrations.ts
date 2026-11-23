import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataIntegrationsSlugOrganizationRoute,
  deleteDataIntegrationsSlugRoute,
  getDataIntegrationsRoute,
  getDataIntegrationsSlugOrganizationRoute,
  getDataIntegrationsSlugRoute,
  postDataIntegrationsFinishRoute,
  postDataIntegrationsRoute,
  postDataIntegrationsSlugApiKeyRoute,
  postDataIntegrationsSlugAuthorizeRoute,
  postDataIntegrationsSlugClientCredentialsRoute,
  postDataIntegrationsSlugCredentialsRoute,
  postDataIntegrationsSlugTokenRoute,
  putDataIntegrationsSlugApiKeyRoute,
  putDataIntegrationsSlugClientCredentialsRoute,
  putDataIntegrationsSlugOrganizationRoute,
  putDataIntegrationsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataIntegrationsHandler = app
  .openapi(postDataIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataIntegrationsFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataIntegrationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataIntegrationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataIntegrationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataIntegrationsSlugApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataIntegrationsSlugApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataIntegrationsSlugAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataIntegrationsSlugClientCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataIntegrationsSlugClientCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataIntegrationsSlugCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataIntegrationsSlugOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataIntegrationsSlugOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataIntegrationsSlugOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataIntegrationsSlugTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

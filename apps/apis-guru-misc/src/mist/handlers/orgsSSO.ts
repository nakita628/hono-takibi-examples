import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSsosSsoIdRoute,
  getApiV1OrgsOrgIdSsosRoute,
  getApiV1OrgsOrgIdSsosSsoIdFailuresRoute,
  getApiV1OrgsOrgIdSsosSsoIdMetadataRoute,
  getApiV1OrgsOrgIdSsosSsoIdMetadataXmlRoute,
  getApiV1OrgsOrgIdSsosSsoIdRoute,
  postApiV1OrgsOrgIdSsosRoute,
  putApiV1OrgsOrgIdSsosSsoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSSOHandler = app
  .openapi(getApiV1OrgsOrgIdSsosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSsosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsosSsoIdFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsosSsoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsosSsoIdMetadataXmlRoute, (c) => {
    throw new Error('Not implemented')
  })

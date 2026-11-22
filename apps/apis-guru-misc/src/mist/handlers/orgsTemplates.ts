import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdTemplatesTemplateIdRoute,
  getApiV1OrgsOrgIdTemplatesRoute,
  getApiV1OrgsOrgIdTemplatesTemplateIdRoute,
  postApiV1OrgsOrgIdTemplatesRoute,
  postApiV1OrgsOrgIdTemplatesTemplateIdCloneRoute,
  putApiV1OrgsOrgIdTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsTemplatesHandler = app
  .openapi(getApiV1OrgsOrgIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdTemplatesTemplateIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })

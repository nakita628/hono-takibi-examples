import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdWlansWlanIdPortalImageRoute,
  deleteApiV1OrgsOrgIdWlansWlanIdRoute,
  getApiV1OrgsOrgIdWlansDerivedRoute,
  getApiV1OrgsOrgIdWlansRoute,
  getApiV1OrgsOrgIdWlansWlanIdRoute,
  postApiV1OrgsOrgIdWlansRoute,
  postApiV1OrgsOrgIdWlansWlanIdPortalImageRoute,
  putApiV1OrgsOrgIdWlansWlanIdPortalTemplateRoute,
  putApiV1OrgsOrgIdWlansWlanIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsWlansHandler = app
  .openapi(getApiV1OrgsOrgIdWlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWlansDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWlansWlanIdPortalImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWlansWlanIdPortalImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWlansWlanIdPortalTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })

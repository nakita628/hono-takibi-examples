import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdWxrulesWxrulesIdRoute,
  getApiV1OrgsOrgIdWxrulesDerivedRoute,
  getApiV1OrgsOrgIdWxrulesRoute,
  getApiV1OrgsOrgIdWxrulesWxrulesIdRoute,
  postApiV1OrgsOrgIdWxrulesRoute,
  putApiV1OrgsOrgIdWxrulesWxrulesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsWxRulesHandler = app
  .openapi(getApiV1OrgsOrgIdWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxrulesDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

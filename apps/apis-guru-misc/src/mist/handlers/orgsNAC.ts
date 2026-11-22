import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdNacrulesNacruleIdRoute,
  deleteApiV1OrgsOrgIdNactagsNactagIdRoute,
  getApiV1OrgsOrgIdNacrulesNacruleIdRoute,
  getApiV1OrgsOrgIdNacrulesRoute,
  getApiV1OrgsOrgIdNactagsNactagIdRoute,
  getApiV1OrgsOrgIdNactagsRoute,
  postApiV1OrgsOrgIdNacrulesRoute,
  postApiV1OrgsOrgIdNactagsRoute,
  putApiV1OrgsOrgIdNacrulesNacruleIdRoute,
  putApiV1OrgsOrgIdNactagsNactagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsNACHandler = app
  .openapi(getApiV1OrgsOrgIdNacrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdNacrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdNacrulesNacruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNacrulesNacruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdNacrulesNacruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNactagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdNactagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdNactagsNactagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNactagsNactagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdNactagsNactagIdRoute, (c) => {
    throw new Error('Not implemented')
  })

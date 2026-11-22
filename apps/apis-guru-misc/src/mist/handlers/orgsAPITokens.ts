import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdApitokensApitokenIdRoute,
  getApiV1OrgsOrgIdApitokensApitokenIdRoute,
  getApiV1OrgsOrgIdApitokensRoute,
  postApiV1OrgsOrgIdApitokensRoute,
  putApiV1OrgsOrgIdApitokensApitokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsAPITokensHandler = app
  .openapi(getApiV1OrgsOrgIdApitokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdApitokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdApitokensApitokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdApitokensApitokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdApitokensApitokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })

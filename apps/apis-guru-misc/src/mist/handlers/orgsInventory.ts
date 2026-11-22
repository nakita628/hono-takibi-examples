import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdInventoryRoute,
  postApiV1OrgsOrgIdInventoryReevaluateAutoAssignmentRoute,
  postApiV1OrgsOrgIdInventoryReplaceRoute,
  postApiV1OrgsOrgIdInventoryRoute,
  putApiV1OrgsOrgIdInventoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsInventoryHandler = app
  .openapi(getApiV1OrgsOrgIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdInventoryReevaluateAutoAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdInventoryReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })

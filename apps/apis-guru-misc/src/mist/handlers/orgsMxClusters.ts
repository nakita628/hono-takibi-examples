import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdMxclustersMxclusterIdRoute,
  getApiV1OrgsOrgIdMxclustersMxclusterIdRoute,
  getApiV1OrgsOrgIdMxclustersRoute,
  postApiV1OrgsOrgIdMxclustersRoute,
  putApiV1OrgsOrgIdMxclustersMxclusterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsMxClustersHandler = app
  .openapi(getApiV1OrgsOrgIdMxclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdMxclustersMxclusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxclustersMxclusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdMxclustersMxclusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })

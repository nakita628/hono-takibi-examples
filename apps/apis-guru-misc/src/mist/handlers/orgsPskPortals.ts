import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdPskportalsPskportalIdRoute,
  getApiV1OrgsOrgIdPskportalsPskportalIdRoute,
  getApiV1OrgsOrgIdPskportalsRoute,
  postApiV1OrgsOrgIdPskportalsRoute,
  putApiV1OrgsOrgIdPskportalsPskportalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsPskPortalsHandler = app
  .openapi(getApiV1OrgsOrgIdPskportalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdPskportalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdPskportalsPskportalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdPskportalsPskportalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdPskportalsPskportalIdRoute, (c) => {
    throw new Error('Not implemented')
  })

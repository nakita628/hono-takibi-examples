import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSsorolesSsoroleIdRoute,
  getApiV1OrgsOrgIdSsorolesRoute,
  getApiV1OrgsOrgIdSsorolesSsoroleIdRoute,
  postApiV1OrgsOrgIdSsorolesRoute,
  putApiV1OrgsOrgIdSsorolesSsoroleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSSORolesHandler = app
  .openapi(getApiV1OrgsOrgIdSsorolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSsorolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })

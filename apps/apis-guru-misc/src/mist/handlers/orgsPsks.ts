import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdPsksPskIdRoute,
  getApiV1OrgsOrgIdPsksPskIdRoute,
  getApiV1OrgsOrgIdPsksRoute,
  postApiV1OrgsOrgIdPsksImportRoute,
  postApiV1OrgsOrgIdPsksPskIdDeleteOldPassphraseRoute,
  postApiV1OrgsOrgIdPsksRoute,
  putApiV1OrgsOrgIdPsksPskIdRoute,
  putApiV1OrgsOrgIdPsksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsPsksHandler = app
  .openapi(getApiV1OrgsOrgIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdPsksImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdPsksPskIdDeleteOldPassphraseRoute, (c) => {
    throw new Error('Not implemented')
  })

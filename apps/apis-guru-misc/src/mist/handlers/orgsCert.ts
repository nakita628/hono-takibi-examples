import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdCertRoute,
  postApiV1OrgsOrgIdCertRegenerateRoute,
  postApiV1OrgsOrgIdCrlTruncateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsCertHandler = app
  .openapi(getApiV1OrgsOrgIdCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdCertRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdCrlTruncateRoute, (c) => {
    throw new Error('Not implemented')
  })

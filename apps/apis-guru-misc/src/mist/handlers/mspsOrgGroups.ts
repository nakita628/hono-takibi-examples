import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1MspsMspIdOrggroupsOrggroupIdRoute,
  getApiV1MspsMspIdOrggroupsOrggroupIdRoute,
  getApiV1MspsMspIdOrggroupsRoute,
  postApiV1MspsMspIdOrggroupsRoute,
  putApiV1MspsMspIdOrggroupsOrggroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mspsOrgGroupsHandler = app
  .openapi(getApiV1MspsMspIdOrggroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdOrggroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdOrggroupsOrggroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdOrggroupsOrggroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdOrggroupsOrggroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })

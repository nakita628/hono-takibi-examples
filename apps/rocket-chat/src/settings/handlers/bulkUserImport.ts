import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ImportStatusRoute,
  postApiV1ImportAddUsersRoute,
  postApiV1ImportClearRoute,
  postApiV1ImportNewRoute,
  postApiV1ImportRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkUserImportHandler = app
  .openapi(postApiV1ImportNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportAddUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportClearRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1MeApiKeyScopesIndexRoute,
  getApiV1MeIndexRoute,
  getApiV1MeRolesIndexRoute,
  putApiV1MeIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const currentUserHandler = app
  .openapi(getApiV1MeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MeApiKeyScopesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MeRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AccountsNameFollowersRoute,
  getApiV1AccountsNameRatingsRoute,
  getApiV1AccountsNameRoute,
  getApiV1AccountsNameVideosRoute,
  getApiV1AccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getApiV1AccountsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsNameRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })

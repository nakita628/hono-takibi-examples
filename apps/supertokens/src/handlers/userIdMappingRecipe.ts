import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdRecipeUseridMapRoute,
  postAppidAppIdRecipeUseridMapRemoveRoute,
  postAppidAppIdRecipeUseridMapRoute,
  putAppidAppIdRecipeUseridExternalUserIdInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userIdMappingRecipeHandler = app
  .openapi(postAppidAppIdRecipeUseridMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeUseridMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeUseridMapRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeUseridExternalUserIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })

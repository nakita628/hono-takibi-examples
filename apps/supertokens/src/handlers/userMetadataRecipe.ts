import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdRecipeUserMetadataRoute,
  postAppidAppIdRecipeUserMetadataRemoveRoute,
  putAppidAppIdRecipeUserMetadataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userMetadataRecipeHandler = app
  .openapi(getAppidAppIdRecipeUserMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeUserMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeUserMetadataRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })

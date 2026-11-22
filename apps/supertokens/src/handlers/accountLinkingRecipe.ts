import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdRecipeAccountlinkingUserLinkCheckRoute,
  getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRoute,
  postAppidAppIdRecipeAccountlinkingUserLinkRoute,
  postAppidAppIdRecipeAccountlinkingUserPrimaryRoute,
  postAppidAppIdRecipeAccountlinkingUserUnlinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountLinkingRecipeHandler = app
  .openapi(getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeAccountlinkingUserLinkCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeAccountlinkingUserPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeAccountlinkingUserLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeAccountlinkingUserUnlinkRoute, (c) => {
    throw new Error('Not implemented')
  })

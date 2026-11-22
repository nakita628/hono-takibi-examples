import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1UsersUserIdFeedsIdRoute, getV1UsersUserIdFeedsIdSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const feedsHandler = app
  .openapi(getV1UsersUserIdFeedsIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdFeedsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

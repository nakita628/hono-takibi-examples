import { OpenAPIHono } from '@hono/zod-openapi'
import { getHubItemsRoute, postHubsHubIdManageItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const boxHubItemsHandler = app
  .openapi(getHubItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubsHubIdManageItemsRoute, (c) => {
    throw new Error('Not implemented')
  })

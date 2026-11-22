import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CustomListsCustomListIdRoute, getV2CustomListsRoute } from '../routes'

const app = new OpenAPIHono()

export const customListsHandler = app
  .openapi(getV2CustomListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomListsCustomListIdRoute, (c) => {
    throw new Error('Not implemented')
  })

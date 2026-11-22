import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAddonPvtGiftlistGetListIdRoute } from '../routes'

const app = new OpenAPIHono()

export const giftListHandler = app.openapi(getApiAddonPvtGiftlistGetListIdRoute, (c) => {
  throw new Error('Not implemented')
})

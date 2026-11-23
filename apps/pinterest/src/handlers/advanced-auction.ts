import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdvancedAuctionItemsGetRoute, postAdvancedAuctionItemsSubmitRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedAuctionHandler = app
  .openapi(postAdvancedAuctionItemsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdvancedAuctionItemsSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })

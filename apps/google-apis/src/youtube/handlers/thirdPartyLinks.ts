import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3ThirdPartyLinksRoute,
  getYoutubeV3ThirdPartyLinksRoute,
  postYoutubeV3ThirdPartyLinksRoute,
  putYoutubeV3ThirdPartyLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thirdPartyLinksHandler = app
  .openapi(deleteYoutubeV3ThirdPartyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3ThirdPartyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3ThirdPartyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3ThirdPartyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })

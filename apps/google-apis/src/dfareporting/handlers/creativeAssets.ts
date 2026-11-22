import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const creativeAssetsHandler = app.openapi(
  postUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

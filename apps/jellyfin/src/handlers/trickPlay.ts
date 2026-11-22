import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVideosItemIdTrickplayWidthIndexJpgRoute,
  getVideosItemIdTrickplayWidthTilesM3u8Route,
} from '../routes'

const app = new OpenAPIHono()

export const trickPlayHandler = app
  .openapi(getVideosItemIdTrickplayWidthIndexJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdTrickplayWidthTilesM3u8Route, (c) => {
    throw new Error('Not implemented')
  })

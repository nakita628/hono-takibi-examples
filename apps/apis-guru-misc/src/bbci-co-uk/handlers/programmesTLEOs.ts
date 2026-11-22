import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesCategoryHighlightsRoute,
  getCategoriesCategoryProgrammesRoute,
  getChannelsChannelBroadcastsRoute,
  getChannelsChannelProgrammesRoute,
  getHomeHighlightsRoute,
  getProgrammesPidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const programmesTLEOsHandler = app
  .openapi(getCategoriesCategoryHighlightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryProgrammesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelProgrammesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHomeHighlightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProgrammesPidRoute, (c) => {
    throw new Error('Not implemented')
  })

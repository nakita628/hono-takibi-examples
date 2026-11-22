import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEpisodesIdNextSiblingRoute,
  getEpisodesIdPreviousSiblingRoute,
  getEpisodesIdRoute,
  getEpisodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const episodeHandler = app
  .openapi(getEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesIdNextSiblingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesIdPreviousSiblingRoute, (c) => {
    throw new Error('Not implemented')
  })

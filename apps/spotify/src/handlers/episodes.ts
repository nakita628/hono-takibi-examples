import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeEpisodesRoute,
  getEpisodesIdRoute,
  getEpisodesRoute,
  getMeEpisodesContainsRoute,
  getMeEpisodesRoute,
  putMeEpisodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const episodesHandler = app
  .openapi(getEpisodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEpisodesContainsRoute, (c) => {
    throw new Error('Not implemented')
  })

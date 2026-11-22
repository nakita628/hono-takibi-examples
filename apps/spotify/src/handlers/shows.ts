import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeShowsRoute,
  getMeShowsContainsRoute,
  getMeShowsRoute,
  getShowsIdEpisodesRoute,
  getShowsIdRoute,
  getShowsRoute,
  putMeShowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const showsHandler = app
  .openapi(getShowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeShowsContainsRoute, (c) => {
    throw new Error('Not implemented')
  })

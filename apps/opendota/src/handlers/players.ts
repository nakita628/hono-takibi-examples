import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlayersAccountIdCountsRoute,
  getPlayersAccountIdHeroesRoute,
  getPlayersAccountIdHistogramsFieldRoute,
  getPlayersAccountIdMatchesRoute,
  getPlayersAccountIdPeersRoute,
  getPlayersAccountIdProsRoute,
  getPlayersAccountIdRankingsRoute,
  getPlayersAccountIdRatingsRoute,
  getPlayersAccountIdRecentMatchesRoute,
  getPlayersAccountIdRoute,
  getPlayersAccountIdTotalsRoute,
  getPlayersAccountIdWardmapRoute,
  getPlayersAccountIdWlRoute,
  getPlayersAccountIdWordcloudRoute,
  postPlayersAccountIdRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playersHandler = app
  .openapi(getPlayersAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdWlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdRecentMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdHeroesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdProsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdHistogramsFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdWardmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdWordcloudRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayersAccountIdRankingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlayersAccountIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })

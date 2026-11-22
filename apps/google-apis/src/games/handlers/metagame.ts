import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGamesV1MetagameConfigRoute,
  getGamesV1PlayersPlayerIdCategoriesCollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metagameHandler = app
  .openapi(getGamesV1MetagameConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersPlayerIdCategoriesCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMangaIdCharactersRoute,
  getMangaIdExternalRoute,
  getMangaIdForumRoute,
  getMangaIdFullRoute,
  getMangaIdMoreinfoRoute,
  getMangaIdNewsRoute,
  getMangaIdPicturesRoute,
  getMangaIdRecommendationsRoute,
  getMangaIdRelationsRoute,
  getMangaIdReviewsRoute,
  getMangaIdRoute,
  getMangaIdStatisticsRoute,
  getMangaIdUserupdatesRoute,
  getMangaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mangaHandler = app
  .openapi(getMangaIdFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdCharactersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdNewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdForumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdMoreinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdUserupdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaIdExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMangaRoute, (c) => {
    throw new Error('Not implemented')
  })

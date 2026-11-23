import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
  deleteOndemandPagesOndemandIdGenresGenreIdRoute,
  deleteOndemandPagesOndemandIdPromotionsPromotionIdRoute,
  deleteOndemandPagesOndemandIdRegionsCountryRoute,
  deleteOndemandPagesOndemandIdRegionsRoute,
  deleteOndemandPagesOndemandIdRoute,
  deleteOndemandPagesOndemandIdVideosVideoIdRoute,
  getOndemandGenresGenreIdPagesOndemandIdRoute,
  getOndemandGenresGenreIdPagesRoute,
  getOndemandGenresGenreIdRoute,
  getOndemandGenresRoute,
  getOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
  getOndemandPagesOndemandIdBackgroundsRoute,
  getOndemandPagesOndemandIdGenresGenreIdRoute,
  getOndemandPagesOndemandIdGenresRoute,
  getOndemandPagesOndemandIdLikesRoute,
  getOndemandPagesOndemandIdPicturesPosterIdRoute,
  getOndemandPagesOndemandIdPicturesRoute,
  getOndemandPagesOndemandIdPromotionsPromotionIdCodesRoute,
  getOndemandPagesOndemandIdPromotionsPromotionIdRoute,
  getOndemandPagesOndemandIdPromotionsRoute,
  getOndemandPagesOndemandIdRegionsCountryRoute,
  getOndemandPagesOndemandIdRegionsRoute,
  getOndemandPagesOndemandIdRoute,
  getOndemandPagesOndemandIdSeasonsRoute,
  getOndemandPagesOndemandIdSeasonsSeasonIdRoute,
  getOndemandPagesOndemandIdSeasonsSeasonIdVideosRoute,
  getOndemandPagesOndemandIdVideosRoute,
  getOndemandPagesOndemandIdVideosVideoIdRoute,
  getOndemandRegionsCountryRoute,
  getOndemandRegionsRoute,
  patchOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
  patchOndemandPagesOndemandIdPicturesPosterIdRoute,
  patchOndemandPagesOndemandIdRoute,
  postOndemandPagesOndemandIdBackgroundsRoute,
  postOndemandPagesOndemandIdPicturesRoute,
  postOndemandPagesOndemandIdPromotionsRoute,
  putOndemandPagesOndemandIdGenresGenreIdRoute,
  putOndemandPagesOndemandIdRegionsCountryRoute,
  putOndemandPagesOndemandIdRegionsRoute,
  putOndemandPagesOndemandIdVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ondemandHandler = app
  .openapi(getOndemandGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandGenresGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandGenresGenreIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandGenresGenreIdPagesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOndemandPagesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOndemandPagesOndemandIdBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdBackgroundsBackgroundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdBackgroundsBackgroundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOndemandPagesOndemandIdBackgroundsBackgroundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdGenresGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdGenresGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOndemandPagesOndemandIdGenresGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOndemandPagesOndemandIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdPicturesPosterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOndemandPagesOndemandIdPicturesPosterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOndemandPagesOndemandIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdPromotionsPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdPromotionsPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdPromotionsPromotionIdCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOndemandPagesOndemandIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdRegionsCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdRegionsCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOndemandPagesOndemandIdRegionsCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdSeasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdSeasonsSeasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdSeasonsSeasonIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOndemandPagesOndemandIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandRegionsCountryRoute, (c) => {
    throw new Error('Not implemented')
  })

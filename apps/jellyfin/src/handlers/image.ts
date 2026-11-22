import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBrandingSplashscreenRoute,
  deleteItemsItemIdImagesImageTypeImageIndexRoute,
  deleteItemsItemIdImagesImageTypeRoute,
  deleteUserImageRoute,
  getArtistsNameImagesImageTypeImageIndexRoute,
  getBrandingSplashscreenRoute,
  getGenresNameImagesImageTypeImageIndexRoute,
  getGenresNameImagesImageTypeRoute,
  getItemsItemIdImagesImageTypeImageIndexRoute,
  getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
  getItemsItemIdImagesImageTypeRoute,
  getItemsItemIdImagesRoute,
  getMusicGenresNameImagesImageTypeImageIndexRoute,
  getMusicGenresNameImagesImageTypeRoute,
  getPersonsNameImagesImageTypeImageIndexRoute,
  getPersonsNameImagesImageTypeRoute,
  getStudiosNameImagesImageTypeImageIndexRoute,
  getStudiosNameImagesImageTypeRoute,
  getUserImageRoute,
  headArtistsNameImagesImageTypeImageIndexRoute,
  headGenresNameImagesImageTypeImageIndexRoute,
  headGenresNameImagesImageTypeRoute,
  headItemsItemIdImagesImageTypeImageIndexRoute,
  headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
  headItemsItemIdImagesImageTypeRoute,
  headMusicGenresNameImagesImageTypeImageIndexRoute,
  headMusicGenresNameImagesImageTypeRoute,
  headPersonsNameImagesImageTypeImageIndexRoute,
  headPersonsNameImagesImageTypeRoute,
  headStudiosNameImagesImageTypeImageIndexRoute,
  headStudiosNameImagesImageTypeRoute,
  headUserImageRoute,
  postBrandingSplashscreenRoute,
  postItemsItemIdImagesImageTypeImageIndexIndexRoute,
  postItemsItemIdImagesImageTypeImageIndexRoute,
  postItemsItemIdImagesImageTypeRoute,
  postUserImageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imageHandler = app
  .openapi(getArtistsNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headArtistsNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingSplashscreenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrandingSplashscreenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBrandingSplashscreenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headGenresNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headGenresNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsItemIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headItemsItemIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsItemIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headItemsItemIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postItemsItemIdImagesImageTypeImageIndexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headMusicGenresNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headMusicGenresNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonsNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headPersonsNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonsNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headPersonsNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiosNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headStudiosNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiosNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headStudiosNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headUserImageRoute, (c) => {
    throw new Error('Not implemented')
  })

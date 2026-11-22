import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2AudioCollectionsIdItemsRoute,
  deleteV2AudioCollectionsIdRoute,
  getV2AudioCollectionsIdItemsRoute,
  getV2AudioCollectionsIdRoute,
  getV2AudioCollectionsRoute,
  getV2AudioGenresRoute,
  getV2AudioIdRoute,
  getV2AudioInstrumentsRoute,
  getV2AudioLicensesRoute,
  getV2AudioMoodsRoute,
  getV2AudioRoute,
  getV2AudioSearchRoute,
  postV2AudioCollectionsIdItemsRoute,
  postV2AudioCollectionsIdRoute,
  postV2AudioCollectionsRoute,
  postV2AudioLicensesIdDownloadsRoute,
  postV2AudioLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audioHandler = app
  .openapi(getV2AudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AudioCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AudioCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioInstrumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioLicensesIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioMoodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCacheSourceIdRoute,
  getCatalogRoute,
  getFontFontstackStartEndRoute,
  getHealthRoute,
  getOgcStylesStyleIdRoute,
  getSdfSpriteSourceIdsJsonRoute,
  getSdfSpriteSourceIdsPngRoute,
  getSourceIdsRoute,
  getSourceIdsZXYRoute,
  getSpriteSourceIdsJsonRoute,
  getSpriteSourceIdsPngRoute,
  getStyleStyleIdRoute,
  getStyleStyleIdStaticCameraSizeFormatRoute,
  getStyleStyleIdZXYFormatRoute,
  postStyleStyleIdStaticCameraSizeFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crateSrvHandler = app
  .openapi(getSourceIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourceIdsZXYRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCacheSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFontFontstackStartEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcStylesStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSdfSpriteSourceIdsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSdfSpriteSourceIdsPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpriteSourceIdsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpriteSourceIdsPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStyleStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStyleStyleIdZXYFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStyleStyleIdStaticCameraSizeFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStyleStyleIdStaticCameraSizeFormatRoute, (c) => {
    throw new Error('Not implemented')
  })

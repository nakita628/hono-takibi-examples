import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMapsV0MapsMapNameRoute,
  getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeRoute,
  getMapsV0MapsMapNameRoute,
  getMapsV0MapsMapNameSpritesFileNameRoute,
  getMapsV0MapsMapNameStyleDescriptorRoute,
  getMapsV0MapsMapNameTilesZXYRoute,
  patchMapsV0MapsMapNameRoute,
  postMapsV0ListMapsRoute,
  postMapsV0MapsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mapsHandler = app
  .openapi(postMapsV0MapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMapsV0MapsMapNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapsV0MapsMapNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMapsV0MapsMapNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapsV0MapsMapNameSpritesFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapsV0MapsMapNameStyleDescriptorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapsV0MapsMapNameTilesZXYRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMapsV0ListMapsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getImagesChildObjectsIdRoute,
  getImagesDetailsIdRoute,
  getImagesIdRoute,
  getImagesOpenOfficeXmlIdRoute,
  getImagesSvgIdRoute,
  putImagesGetImageIdRoute,
  putImagesOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getImagesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putImagesGetImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putImagesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

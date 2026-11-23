import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSmartArtsChildObjectsIdRoute,
  getSmartArtsDetailsIdRoute,
  getSmartArtsIdRoute,
  getSmartArtsOpenOfficeXmlIdRoute,
  getSmartArtsSvgIdRoute,
  putSmartArtsOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smartArtsHandler = app
  .openapi(getSmartArtsChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmartArtsDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmartArtsOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmartArtsOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmartArtsSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmartArtsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

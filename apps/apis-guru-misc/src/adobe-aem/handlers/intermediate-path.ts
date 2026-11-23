import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIntermediatePathAuthorizableIdKeystoreStoreP12Route,
  getIntermediatePathAuthorizableIdKsJsonRoute,
  postIntermediatePathAuthorizableIdKsHtmlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const intermediatePathHandler = app
  .openapi(postIntermediatePathAuthorizableIdKsHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntermediatePathAuthorizableIdKsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntermediatePathAuthorizableIdKeystoreStoreP12Route, (c) => {
    throw new Error('Not implemented')
  })

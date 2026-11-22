import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi2JsonNameTypeGeoProperNounCountryIso2Route,
  getApi2JsonNameTypeProperNounRoute,
  postApi2JsonNameTypeBatchRoute,
  postApi2JsonNameTypeGeoBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(getApi2JsonNameTypeProperNounRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonNameTypeBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonNameTypeGeoProperNounCountryIso2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonNameTypeGeoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })

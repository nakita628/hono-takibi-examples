import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AssetsRoute,
  getV1NameAssetsRoute,
  getV1NameLikedassetsRoute,
  getV1NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLikedassetsRoute, (c) => {
    throw new Error('Not implemented')
  })

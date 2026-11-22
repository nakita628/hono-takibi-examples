import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameAssetsRoute, getV1NameLikedassetsRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getV1NameAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLikedassetsRoute, (c) => {
    throw new Error('Not implemented')
  })

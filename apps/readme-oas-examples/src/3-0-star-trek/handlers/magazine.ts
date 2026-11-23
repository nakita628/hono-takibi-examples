import { OpenAPIHono } from '@hono/zod-openapi'
import { getMagazineRoute, getMagazineSearchRoute, postMagazineSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const magazineHandler = app
  .openapi(getMagazineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMagazineSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMagazineSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

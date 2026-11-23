import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePetsIdRoute, getPetsIdRoute, getPetsRoute, postPetsRoute } from '../routes'

const app = new OpenAPIHono()

export const petsHandler = app
  .openapi(getPetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

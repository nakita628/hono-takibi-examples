import { OpenAPIHono } from '@hono/zod-openapi'
import { getPetIdRoute, putPetIdRoute } from '../routes'

const app = new OpenAPIHono()

export const petHandler = app
  .openapi(putPetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPetIdRoute, (c) => {
    throw new Error('Not implemented')
  })

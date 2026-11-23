import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteFacesIdRoute, getFacesRoute, postFacesRoute, putFacesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const facesHandler = app
  .openapi(getFacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

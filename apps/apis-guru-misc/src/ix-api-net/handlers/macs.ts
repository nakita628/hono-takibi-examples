import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteMacsIdRoute, getMacsIdRoute, getMacsRoute, postMacsRoute } from '../routes'

const app = new OpenAPIHono()

export const macsHandler = app
  .openapi(getMacsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMacsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMacsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMacsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

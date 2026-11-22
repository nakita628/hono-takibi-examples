import { OpenAPIHono } from '@hono/zod-openapi'
import { getCodesOfConductKeyRoute, getCodesOfConductRoute } from '../routes'

const app = new OpenAPIHono()

export const codesOfConductHandler = app
  .openapi(getCodesOfConductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCodesOfConductKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

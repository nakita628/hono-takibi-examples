import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2UserCatalogsBeezupColumnsRoute, getV2UserCatalogsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const catalogs__GlobalHandler = app
  .openapi(getV2UserCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsBeezupColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })

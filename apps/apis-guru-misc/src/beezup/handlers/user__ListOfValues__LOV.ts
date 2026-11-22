import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2UserLovIndexRoute, getV2UserLovListNameRoute } from '../routes'

const app = new OpenAPIHono()

export const user__ListOfValues__LOVHandler = app
  .openapi(getV2UserLovIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserLovListNameRoute, (c) => {
    throw new Error('Not implemented')
  })

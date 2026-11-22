import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2PublicChannelsCountryIsoCodeRoute, getV2PublicChannelsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const public__Channels__PublicChannelsHandler = app
  .openapi(getV2PublicChannelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PublicChannelsCountryIsoCodeRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ProvidersAddonMatomoResourcesMatomoIdRoute,
  postV2ProvidersAddonMatomoResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ProvidersAddonMatomoResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProvidersAddonMatomoResourcesMatomoIdRoute, (c) => {
    throw new Error('Not implemented')
  })

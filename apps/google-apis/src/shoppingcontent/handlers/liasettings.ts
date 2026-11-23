import { OpenAPIHono } from '@hono/zod-openapi'
import { getLiasettingsPosdataprovidersRoute, postLiasettingsBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const liasettingsHandler = app
  .openapi(postLiasettingsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiasettingsPosdataprovidersRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SitesSiteIdOtherdevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesOthersHandler = app.openapi(getApiV1SitesSiteIdOtherdevicesRoute, (c) => {
  throw new Error('Not implemented')
})

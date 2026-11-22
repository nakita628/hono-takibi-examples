import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionDomainsDomainIdZoneFileRoute } from '../routes'

const app = new OpenAPIHono()

export const domainZoneFileHandler = app.openapi(getApiVersionDomainsDomainIdZoneFileRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getCuratedSetsSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const curatedSetsHandler = app.openapi(getCuratedSetsSlugRoute, (c) => {
  throw new Error('Not implemented')
})

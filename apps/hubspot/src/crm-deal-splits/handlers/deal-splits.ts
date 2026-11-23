import { OpenAPIHono } from '@hono/zod-openapi'
import { postDealSplits202609BatchReadRoute, postDealSplits202609BatchUpsertRoute } from '../routes'

const app = new OpenAPIHono()

export const dealSplitsHandler = app
  .openapi(postDealSplits202609BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDealSplits202609BatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })

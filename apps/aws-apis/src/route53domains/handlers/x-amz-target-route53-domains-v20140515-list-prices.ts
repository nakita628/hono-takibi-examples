import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515ListPricesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515ListPricesHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515ListPricesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515ListTagsForDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515ListTagsForDomainHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515ListTagsForDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

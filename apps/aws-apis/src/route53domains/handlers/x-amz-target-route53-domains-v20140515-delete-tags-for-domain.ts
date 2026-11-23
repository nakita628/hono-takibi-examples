import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515DeleteTagsForDomainHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute,
  getV2FirstAndThirdPartyAudiencesRoute,
  patchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute,
  postV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersRoute,
  postV2FirstAndThirdPartyAudiencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firstAndThirdPartyAudiencesHandler = app
  .openapi(getV2FirstAndThirdPartyAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FirstAndThirdPartyAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

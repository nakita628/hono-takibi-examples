import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2GoogleAudiencesGoogleAudienceIdRoute, getV2GoogleAudiencesRoute } from '../routes'

const app = new OpenAPIHono()

export const googleAudiencesHandler = app
  .openapi(getV2GoogleAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GoogleAudiencesGoogleAudienceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

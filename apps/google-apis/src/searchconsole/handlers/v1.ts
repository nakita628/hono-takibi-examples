import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1UrlInspectionIndexInspectRoute,
  postV1UrlTestingToolsMobileFriendlyTestRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1UrlInspectionIndexInspectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UrlTestingToolsMobileFriendlyTestRunRoute, (c) => {
    throw new Error('Not implemented')
  })

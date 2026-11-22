import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPhoneNumbersRegulatoryRequirements2Route,
  getPhoneNumbersRegulatoryRequirementsRoute,
  getRegulatoryRequirementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regulatoryRequirementsHandler = app
  .openapi(getPhoneNumbersRegulatoryRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersRegulatoryRequirements2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegulatoryRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
